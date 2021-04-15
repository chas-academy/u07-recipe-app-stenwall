import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { RecipesService } from '../../services/recipes.service';

// import { EdamamApiData, Recipe } from '../../models/api-edamam.model';
import {
  SpoonacularApiData,
  Recipe,
  SpoonacularRandomApiData,
} from 'src/app/models/api-spoonacular.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  showRecipes: Recipe[] = [];
  randomRecipes?;
  // spoonRecipes: SpoonRecipe[] = [];
  // edaApiData: EdamamApiData;
  spoonApiData: SpoonacularApiData;
  spoonacularRandomApiData: SpoonacularRandomApiData;
  selectedBtn?: string;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.randomRecipes = this.recipesService
      .getRandomRecipesSpoon()
      .subscribe((SpoonacularRandomApiData) => {
        this.showRecipes = SpoonacularRandomApiData.recipes;
      });
  }

  // ANVÄND SEN:
  // --- länka input fr parent till child component:
  // https://angular.io/guide/inputs-outputs
  // --- smartare query?
  // this.recipesService.getRecipesMainsSpoon()
  // .subscribe((data: Config) => this.config = {
  //     heroesUrl: data.heroesUrl,
  //     textfile:  data.textfile,
  //     date: data.date,
  // });
  // --- snygga bilder
  // --- "sourceName": "Foodista"
  // --- "sourceName": "Pink When"
  

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
    }
    console.log(this.showRecipes);
  }
}
