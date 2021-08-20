import { Component, Input, OnInit, SimpleChanges, OnDestroy, OnChanges} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/api-spoonacular.model';
import { ListRecipe } from 'src/app/models/list-recipe.model';
import { List } from 'src/app/models/list.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
})
export class SelectListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() data: Recipe;

  selectedSubscription: Subscription;
  addSubscription: Subscription;
  removeSubscription: Subscription;
  checkSubscription: Subscription;

  selectListsControl = new FormControl();
  recipeLists$: Observable<List[]>;
  selectedLists$: Observable<List[]>;
  recipe: ListRecipe;
  errors = null;
  isRecipeInList: boolean;

  constructor(
    private listService: ListService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.recipeLists$ = this.listService.getAllLists();

    this.recipe = {
      id: null,
      api_id: this.data.id,
      title: this.data.title,
      img: this.data.image,
    };

    this.selectedSubscription = this.listService
      .getListsWithRecipe(this.recipe.api_id)
      .subscribe((result) => {
        this.selectedLists$ = result['list'];
        this.selectListsControl.setValue(this.selectedLists$);
      });
  }

  comparer(recipeList: List, selectedList: List): boolean {
    return recipeList && selectedList
      ? recipeList.id === selectedList.id
      : recipeList === selectedList;
  }

  optionChange(event): void {
    if (event.isUserInput) {
      this.checkSubscription = this.listService
        .checkIfRecipeInList(event.source.value.id, this.recipe.api_id)
        .subscribe(
          (result) => {
            this.isRecipeInList = result.exists;

            if (event.source.selected && !this.isRecipeInList) {
              this.addSubscription = this.listService
                .addRecipeToList(event.source.value.id, this.recipe)
                .subscribe(
                  (result) => {
                    this.snackBar.open(result.message, '', {
                      duration: 2500,
                      verticalPosition: 'top',
                    });
                    this.recipe.id = result.recipe.id;
                  },
                  (error) => {
                    this.errors = error.error;
                    this.snackBar.open(this.errors.error, '', {
                      duration: 2500,
                      verticalPosition: 'top',
                    });
                  },
                  () => {
                    this.addSubscription.unsubscribe();
                  }
                );
            } else {
              this.recipe.id = result.recipe.id;

              this.removeSubscription = this.listService
                .removeRecipeFromList(event.source.value.id, this.recipe.id)
                .subscribe(
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
                    this.removeSubscription.unsubscribe();
                  }
                );
            }
          },
          () => {
            this.checkSubscription.unsubscribe();
          }
        );
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.recipe = {
        api_id: this.data.id,
        title: this.data.title,
        img: this.data.image,
      };
    }
  }

  ngOnDestroy(): void {
    this.selectedSubscription.unsubscribe();
  }
}

// sources to preselcting multiple values in mat-select with reactive form:
// -----------------------------------------------------------------------
// https://stackoverflow.com/a/57032590
// https://stackoverflow.com/q/52078415
// https://stackoverflow.com/q/60359271
// https://stackoverflow.com/a/60359742
// https://newbedev.com/angular-6-material-mat-select-multiple-set-default-value-using-form-control

// source to event listener on change for multiple select w angular material:
// -----------------------------------------------------------------------
// https://stackoverflow.com/questions/50614991/angular-mat-select-multiple-selectionchange-finding-which-option-was-changed