import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { RecipesService } from '../../services/recipes.service';

// import { EdamamApiData, Recipe } from '../../models/api-edamam.model';
import { SpoonacularApiData, Recipe, ExtendedIngredient } from 'src/app/models/api-spoonacular.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  showRecipes: Recipe[] = [];
  ingredients: [];
  // spoonRecipes: SpoonRecipe[] = [];
  // edaApiData: EdamamApiData;
  spoonApiData: SpoonacularApiData;
  selectedBtn?: string;
  foodBtn?: string;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {}

  // ANVÄND SEN:
  // --- länka input fr parent till child component:
  // https://angular.io/guide/inputs-outputs

  // this.recipesService.getRecipesMainsSpoon()
  // .subscribe((data: Config) => this.config = {
  //     heroesUrl: data.heroesUrl,
  //     textfile:  data.textfile,
  //     date: data.date,
  // });

  // remove before production!
  // connection to edamam
  // this.recipesService.getRecipesEda().subscribe((EdamamApiData) => {
  //   this.edaApiData = EdamamApiData;
  //   console.log(this.edaApiData);
  // });

  // connection to spoonacular
  // this.recipesService.getRecipesSpoon().subscribe((SpoonacularApiData) => {
  //   this.spoonApiData = SpoonacularApiData;
  //   console.log(this.spoonApiData);
  // });

  // get recipes from edamam
  // this.recipesService.getRecipesEda().subscribe((EdamamApiData) => {
  //   this.recipes = EdamamApiData.hits.map((hit) => hit.recipe);
  //   console.log(this.recipes);
  // });

  // get recipes from spoonacular
  //   this.recipesService.getRecipesSpoon().subscribe((SpoonacularApiData) => {
  //     this.recipes = SpoonacularApiData.results;
  //     })
  //     console.log(this.recipes);
  // }

  onSelect(event): any {
    this.selectedBtn = event.target.value;
    if (this.selectedBtn === 'appz') {
      this.recipesService
        .getRecipesAppzSpoon()
        .subscribe((SpoonacularApiData) => {
          this.showRecipes = SpoonacularApiData.results;
        });
    } else if (this.selectedBtn === 'mains') {
      this.recipesService
        .getRecipesMainsSpoon()
        .subscribe((SpoonacularApiData) => {
          this.showRecipes = SpoonacularApiData.results;
        });
    } else if (this.selectedBtn === 'desserts') {
      this.recipesService
        .getRecipesDessertsSpoon()
        .subscribe((SpoonacularApiData) => {
          this.showRecipes = SpoonacularApiData.results;
        });
    } else if (this.selectedBtn === 'sides') {
      this.recipesService
        .getRecipesSidesSpoon()
        .subscribe((SpoonacularApiData) => {
          this.showRecipes = SpoonacularApiData.results;
        });
    } else {
      this.recipesService
        .getRandomRecipesSpoon()
        .subscribe((SpoonacularApiData) => {
          this.showRecipes = SpoonacularApiData.results;
        });
    }
    console.log(this.showRecipes);
  }
}
