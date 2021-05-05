import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

import {
  SpoonacularApiData,
  Recipe,
} from '../../models/api-spoonacular.model';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.scss'],
})
export class AppetizersComponent implements OnInit {
  showRecipes: Recipe[] = [];
  spoonApiData: SpoonacularApiData;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService
      .getRecipesAppzSpoon()
      .subscribe((SpoonacularApiData) => {
        this.showRecipes = SpoonacularApiData.results;
      });
  }
}
