import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';

import {
  SpoonacularApiData,
  Recipe,
} from '../../../models/api-spoonacular.model';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.scss'],
})
export class MainsComponent implements OnInit {
  showRecipes: Recipe[] = [];
  spoonApiData: SpoonacularApiData;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService
      .getRecipesMainsSpoon()
      .subscribe((SpoonacularApiData) => {
        this.showRecipes = SpoonacularApiData.results;
      });
  }
}
