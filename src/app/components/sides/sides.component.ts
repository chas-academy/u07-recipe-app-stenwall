import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

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

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService
      .getRecipesSidesSpoon()
      .subscribe((SpoonacularApiData) => {
        this.showRecipes = SpoonacularApiData.results;
      });
      console.log(this.showRecipes);
  }
}
