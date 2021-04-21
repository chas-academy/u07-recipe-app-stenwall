import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  Recipe,
  ExtendedIngredient,
} from 'src/app/models/api-spoonacular.model';
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
  data;
  selectedTab = 'ingredients';

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe((data) => (this.data = data));

    this.chosenRecipe = this.recipesService
      .getDetailedRecipe(this.id)
      .subscribe((Recipe) => {
        this.recipe = Recipe;
        this.extendedIngredients = Recipe.extendedIngredients;
      });

    this.onTabChange();
  }

  onChange(event) {
    this.selectedTab = event.tab.textLabel;
    this.onTabChange();
    console.log(event.tab.textLabel);
  }

  onTabChange() {
    if (this.selectedTab == 'ingredients') {
      console.log(this.selectedTab);
    } else if (this.selectedTab == 'instructions') {
      console.log(this.selectedTab);
    }
  }
}

// sources to tab selection solution:
// -----------------------------------------------------------------------
// https://stackoverflow.com/questions/61761665/angular-mattabchangeevent-does-not-trigger-on-page-load
// -----------------------------------------------------------------------
// https://stackoverflow.com/questions/50854238/angular-material-5-how-to-call-a-function-when-a-tab-is-selected-clicked
// -----------------------------------------------------------------------
// https://stackblitz.com/edit/angular-q2pgt1?file=app%2Ftabs-overview-example.ts
