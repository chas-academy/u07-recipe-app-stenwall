import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { RecipesService } from '../../services/recipes.service';

import { EdamamApiData, Recipe } from '../../models/api-edamam.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  apiData: EdamamApiData;
  selectedRecipe?: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    // remove before production!
    this.recipesService.getRecipes().subscribe((ApiData) => {
      this.apiData = ApiData;
      console.log(this.apiData);
    });

    this.recipesService.getRecipes().subscribe((ApiData) => {
      this.recipes = ApiData.hits.map((hit) => hit.recipe);
    });
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
