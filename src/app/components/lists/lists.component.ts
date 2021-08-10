import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { List, ListArray, ListData } from 'src/app/models/list.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  user: Observable<User>;
  listData: Observable<List[]>;
  // recipeLists: Observable<List[]>;
  userId: number | string;
  subscription: Subscription;

  constructor(
    private listService: ListService,
    public authService: AuthService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    // this.subscription = this.listService.getAllLists().subscribe((listData: ListData) => {
    //   this.recipeLists = listData.list;
    //   console.log(this.recipeLists);
    // })
  }

  ngOnInit(): void {
    this.listData = this.listService.getAllLists();
    this.user = this.authService.profileUser();
    console.log(this.listData);
    // this.recipeLists = this.listData.list;

    // this.userId = this.route.snapshot.paramMap.get('id');
  }

  // removeRecipeFromList(event: any, id: number): void {
  //   event.stopPropagation();
  //   this.listService.removeFromList(id);
  //   this.router.navigate(['/list']);
  // }
}
