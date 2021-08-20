import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ListRecipe } from 'src/app/models/list-recipe.model';
import { AuthService } from 'src/app/services/auth.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listRecipes: Observable<ListRecipe[]>;
  removeSubscription: Subscription;
  listId: number | string;
  errors = null;

  constructor(
    private listService: ListService,
    public authService: AuthService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('id');
    this.listRecipes = this.listService.getListRecipes(this.listId); 
  }

  removeRecipeFromList(event: any, recipeId: number | string, recipeTitle: string, ): void {
    event.stopPropagation();
    let result = confirm(`Are you sure you want to remove recipe "${recipeTitle}"?`); 
    if (result) {
      this.removeSubscription = this.listService.removeRecipeFromList(this.listId, recipeId).subscribe(
        (result) => {
          this.snackBar.open(result.message, '', {
            duration: 2500,
            verticalPosition: 'top',
          });
          console.log(result);
        },
        (error) => {
          this.errors = error.error;
          this.snackBar.open(this.errors.error, '', {
            duration: 2500,
            verticalPosition: 'top',
          });
          console.log(error.error);
        },
        () => {
          this.removeSubscription.unsubscribe();
          this.reloadComponent();
        }
      );
    }
  }

  reloadComponent(): void {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}

// sources for links within links:
// -----------------------------------------------------------------------
// https://stackoverflow.com/questions/43642250/how-to-make-a-link-inside-element-with-router-link-in-angular-2
// https://stackoverflow.com/questions/50284714/using-routerlink-and-click-in-same-button/50285339
