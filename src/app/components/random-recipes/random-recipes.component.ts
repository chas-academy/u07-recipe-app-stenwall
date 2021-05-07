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
  // randomRecipes;
  spoonacularRandomApiData: SpoonacularRandomApiData;
  preferences: object;
  preferenceQuery: string;
  subscription: Subscription;

  constructor(
    private recipesService: RecipesService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.subscription = this.eventService.currentPreferenceQuery.subscribe(
      (preferences) =>
        (this.preferenceQuery = preferences)
    );

    // this.subscription = this.data.currentMessage.subscribe(
    //   (message) => (this.message = message)
    // );

    console.log(this.preferenceQuery);

    this.recipesService
      .getRandomRecipes(this.preferenceQuery)
      .subscribe((SpoonacularRandomApiData) => {
        this.showRecipes = SpoonacularRandomApiData.recipes;
      });

    console.log(this.preferenceQuery);
  }
}
