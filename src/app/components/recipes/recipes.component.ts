import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }
}
