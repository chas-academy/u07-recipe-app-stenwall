import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Recipe, ExtendedIngredient } from 'src/app/models/api-spoonacular.model';
import { RecipesService } from '../../services/recipes.service';

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

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

  @ViewChild('templateBottomSheet') TemplateBottomSheet: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private bottomSheet: MatBottomSheet
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

  openBottomSheet() {
    this.bottomSheet.open(BottomSheetComponent);
  }

  openTemplateSheetMenu() {
    this.bottomSheet.open(this.TemplateBottomSheet);
  }

  closeTemplateSheetMenu() {
    this.bottomSheet.dismiss();
  }
}
