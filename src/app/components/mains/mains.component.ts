import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';

import { SpoonacularApiData, Recipe } from '../../models/api-spoonacular.model';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.scss'],
})
export class MainsComponent implements OnInit {
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
      }
    );

    this.updateRecipeList('');
  }

  updateRecipeList(preferences) {
    this.recipesService
      .getDishTypeRecipes('main+course', preferences)
      .subscribe((SpoonacularApiData) => {
        this.showRecipes = SpoonacularApiData.results;
      });
  }
}
