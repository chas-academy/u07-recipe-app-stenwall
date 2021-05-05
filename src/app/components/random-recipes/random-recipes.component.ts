import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

import { Recipe, SpoonacularRandomApiData } from 'src/app/models/api-spoonacular.model';

@Component({
  selector: 'app-random-recipes',
  templateUrl: './random-recipes.component.html',
  styleUrls: ['./random-recipes.component.scss'],
})
export class RandomRecipesComponent implements OnInit {
  showRecipes: Recipe[] = [];
  randomRecipes?;
  spoonacularRandomApiData: SpoonacularRandomApiData;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.randomRecipes = this.recipesService
      .getRandomRecipesSpoon()
      .subscribe((SpoonacularRandomApiData) => {
        this.showRecipes = SpoonacularRandomApiData.recipes;
      });
  }
}
