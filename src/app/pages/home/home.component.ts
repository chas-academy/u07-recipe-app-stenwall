import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/api-spoonacular.model';

@Component({
  selector: 'app-home',
  template: '<app-recipe-card [data]="recipes"></app-recipe-card>',
})
export class HomeComponent implements OnInit, OnDestroy {
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
      .getRandomRecipes(preferences)
      .subscribe((result) => {
        this.recipes = result.recipes;
      });
  }

  ngOnDestroy(): void {
    this.prefSubscription.unsubscribe();
  }
}
