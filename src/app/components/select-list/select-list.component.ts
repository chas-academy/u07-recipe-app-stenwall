import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { List } from 'src/app/models/list.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent implements OnInit {
  subscription: Subscription;
  selectLists = new FormControl();
  recipeLists: Observable<List[]>;
  list;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.recipeLists = this.listService.getAllLists();

    this.subscription = this.listService.getListRecipes(5).subscribe((data) => {
      this.list = data.recipes;
      console.log(this.list);
    });
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes[this.selectLists]) {
  //     this.showRecipes = this.data;
  //   }
  // }

}
