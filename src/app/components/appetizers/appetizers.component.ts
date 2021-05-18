import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';
import { SpoonacularApiData, Recipe } from '../../models/api-spoonacular.model';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.scss'],
})
export class AppetizersComponent implements OnInit {
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
  }

  updateRecipeList(preferences: string): void {
    this.recipesService
      .getDishTypeRecipes('appetizer', preferences)
      .subscribe((SpoonacularApiData) => {
        this.showRecipes = SpoonacularApiData.results;
      });
  }
}
