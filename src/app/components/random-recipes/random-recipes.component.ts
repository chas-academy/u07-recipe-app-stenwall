import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';

import { Recipe, SpoonacularRandomApiData } from 'src/app/models/api-spoonacular.model';

@Component({
  selector: 'app-random-recipes',
  templateUrl: './random-recipes.component.html',
  styleUrls: ['./random-recipes.component.scss'],
})
export class RandomRecipesComponent implements OnInit {
  showRecipes: Recipe[] = [];
  spoonacularRandomApiData: SpoonacularRandomApiData;
  subscription: Subscription;

  constructor(
    private recipesService: RecipesService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.subscription = this.eventService.currentPreferenceQuery.subscribe(
      (preferences) => {
        this.updateRecipeList(preferences);
      }
    );

  }

  updateRecipeList(preferences) {
    this.recipesService
      .getRandomRecipes(preferences)
      .subscribe((SpoonacularRandomApiData) => {
        this.showRecipes = SpoonacularRandomApiData.recipes;
      });
  }
}
