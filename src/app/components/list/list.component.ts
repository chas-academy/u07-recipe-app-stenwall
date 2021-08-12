import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  user: User[];
  recipeLists: List[];
  userId: number | string;

  constructor(
    private listService: ListService,
    public authService: AuthService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.authService.profileUser().subscribe((user:any) => {
      this.user = user;
    })
  }

  ngOnInit(): void {
    this.recipeLists = this.listService.lists;
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  // removeRecipeFromList(event: any, id: number): void {
  //   event.stopPropagation();
  //   this.listService.removeFromList(id);
  //   this.router.navigate(['/list']);
  // }
}

// sources for links within links:
// -----------------------------------------------------------------------
// https://stackoverflow.com/questions/43642250/how-to-make-a-link-inside-element-with-router-link-in-angular-2
// https://stackoverflow.com/questions/50284714/using-routerlink-and-click-in-same-button/50285339
