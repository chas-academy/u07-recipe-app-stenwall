import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/api-spoonacular.model';

@Component({
  selector: 'app-random-recipes',
  templateUrl: './random-recipes.component.html',
  styleUrls: ['./random-recipes.component.scss'],
})
export class RandomRecipesComponent implements OnInit, OnDestroy {
  showRecipes: Recipe[] = [];
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
        this.showRecipes = result.recipes;
      });
  }

  ngOnDestroy() {
    this.prefSubscription.unsubscribe();
  }
}
