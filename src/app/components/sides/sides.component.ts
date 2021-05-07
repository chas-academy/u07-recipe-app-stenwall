import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';

import {
  SpoonacularApiData,
  Recipe,
} from '../../models/api-spoonacular.model';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.scss'],
})
export class SidesComponent implements OnInit {
  showRecipes: Recipe[] = [];
  spoonApiData: SpoonacularApiData;
  subscription: Subscription;

  constructor(
    private recipesService: RecipesService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.subscription = this.eventService.currentPreferenceQuery.subscribe(
      (preferences) => {
        this.updateRecipeList(preferences);
        console.log(preferences);
      }
    );
  }

  updateRecipeList(preferences) {
    this.recipesService
      .getDishTypeRecipes('side+dish', preferences)
      .subscribe((SpoonacularApiData) => {
        this.showRecipes = SpoonacularApiData.results;
      });
  }
}
