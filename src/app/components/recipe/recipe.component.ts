import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Recipe, ExtendedIngredient } from 'src/app/models/api-spoonacular.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  chosenRecipe;
  id: number | string;
  extendedIngredients: ExtendedIngredient[] = [];

  links = ['Ingredients', 'Instructions'];
  activeLink = this.links[0];

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.chosenRecipe = this.recipesService
      .getDetailedRecipe(this.id)
      .subscribe((Recipe) => {
        this.recipe = Recipe;
        this.extendedIngredients = Recipe.extendedIngredients;
        console.log(this.recipe);
        console.log(this.extendedIngredients);
      });
  }
}
