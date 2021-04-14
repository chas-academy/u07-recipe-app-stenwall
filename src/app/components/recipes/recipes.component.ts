import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { RecipesService } from '../../services/recipes.service';

import { EdamamApiData, Recipe } from '../../models/api-edamam.model';
import { SpoonacularApiData, SpoonRecipe } from 'src/app/models/api-spoonacular.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  spoonRecipes: SpoonRecipe[] = [];
  edaApiData: EdamamApiData;
  spoonApiData: SpoonacularApiData;
  selectedRecipe?: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    // remove before production!
    // connection to edamam
    this.recipesService.getRecipesEda().subscribe((EdamamApiData) => {
      this.edaApiData = EdamamApiData;
      console.log(this.edaApiData);
    });

    // connection to spoonacular
    this.recipesService.getRecipesSpoon().subscribe((SpoonacularApiData) => {
      this.spoonApiData = SpoonacularApiData;
      console.log(this.spoonApiData);
    });

    // get recipes from edamam
    this.recipesService.getRecipesEda().subscribe((EdamamApiData) => {
      this.recipes = EdamamApiData.hits.map((hit) => hit.recipe);
      console.log(this.recipes);
    });

    // get recipes fronm spoonacular
    this.recipesService.getRecipesSpoon().subscribe((SpoonacularApiData) => {
      this.spoonRecipes = SpoonacularApiData.results;
      console.log(this.spoonRecipes);
    });
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
