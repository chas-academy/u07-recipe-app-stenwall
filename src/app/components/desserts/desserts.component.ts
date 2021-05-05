import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

import {
  SpoonacularApiData,
  Recipe,
} from '../../models/api-spoonacular.model';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss'],
})
export class DessertsComponent implements OnInit {
  showRecipes: Recipe[] = [];
  spoonApiData: SpoonacularApiData;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService
      .getRecipesDessertsSpoon()
      .subscribe((SpoonacularApiData) => {
        this.showRecipes = SpoonacularApiData.results;
      });
  }
}
