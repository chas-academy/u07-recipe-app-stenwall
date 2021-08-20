import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';
import { Recipe } from '../../models/api-spoonacular.model';

@Component({
  selector: 'app-mains',
  template: '<app-recipe-card [data]="recipes"></app-recipe-card>',
})
export class MainsComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  prefSubscription: Subscription;

  constructor(
    private recipesService: RecipesService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.prefSubscription = this.eventService.currentPreferenceQuery.subscribe(
      (preferences) => {
        this.updateRecipeList(preferences);
      }
    );
  }

  updateRecipeList(preferences: string): void {
    this.recipesService
      .getDishTypeRecipes('main+course', preferences)
      .subscribe((result) => {
        this.recipes = result.results;
      });
  }

  ngOnDestroy(): void {
    this.prefSubscription.unsubscribe();
  }
}
