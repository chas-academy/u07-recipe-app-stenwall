import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  savedRecipes: List[];
  data: any;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => (this.data = data));
    this.savedRecipes = this.listService.list;
  }

  removeRecipeFromList(event: any, id: number): void {
    event.stopPropagation();
    this.listService.removeFromList(id);
    this.router.navigate(['/list']);
  }
}

// sources for links within links:
// -----------------------------------------------------------------------
// https://stackoverflow.com/questions/43642250/how-to-make-a-link-inside-element-with-router-link-in-angular-2
// https://stackoverflow.com/questions/50284714/using-routerlink-and-click-in-same-button/50285339
