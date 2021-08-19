import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { List } from 'src/app/models/list.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  user: Observable<User>;
  recipeLists: Observable<List[]>;
  deleteSubscription: Subscription;
  errors = null;

  constructor(
    private listService: ListService,
    public authService: AuthService,
    private snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.recipeLists = this.listService.getAllLists();
    this.user = this.authService.profileUser();
  }

  deleteList(listId: number | string, listTitle: string) {
    let result = confirm(`Are you sure you want to delete the list "${listTitle}"?`);
    if (result) {
      this.deleteSubscription = this.listService.deleteList(listId).subscribe(
        (result) => {
          this.snackBar.open(result.message, '', {
            duration: 2500,
            verticalPosition: 'top',
          });
        },
        (error) => {
          this.errors = error.error;
          this.snackBar.open(this.errors.error, '', {
            duration: 2500,
            verticalPosition: 'top',
          });
        },
        () => {
          this.deleteSubscription.unsubscribe();
          this.reloadComponent();
        }
      );
    }
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
