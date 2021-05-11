import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { RecipesService } from '../../services/recipes.service';

// import { EdamamApiData, Recipe } from '../../models/api-edamam.model';
import { SpoonacularApiData, Recipe } from 'src/app/models/api-spoonacular.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showRecipes: Recipe[] = [];
  // spoonRecipes: SpoonRecipe[] = [];
  // edaApiData: EdamamApiData;
  spoonApiData: SpoonacularApiData;
  selectedBtn?: string;
  selectedTab: string;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {}

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

  // onSelectTab(event): any {
  //   this.selectedTab = event.target.value;
  //   this.recipesService
  //     .getDishTypeRecipes(this.selectedTab)
  //     .subscribe((SpoonacularApiData) => {
  //       this.showRecipes = SpoonacularApiData.results;
  //     });
  // }

  // ngAfterContentChecked(): void {
  //   console.log(this.showRecipes);
  // }

  // onSelect(event): any {
  //   this.selectedBtn = event.target.value;
  //   if (this.selectedBtn === 'appz') {
  //     this.recipesService
  //       .getRecipesAppzSpoon()
  //       .subscribe((SpoonacularApiData) => {
  //         this.showRecipes = SpoonacularApiData.results;
  //       });
  //   } else if (this.selectedBtn === 'mains') {
  //     this.recipesService
  //       .getRecipesMainsSpoon()
  //       .subscribe((SpoonacularApiData) => {
  //         this.showRecipes = SpoonacularApiData.results;
  //       });
  //   } else if (this.selectedBtn === 'desserts') {
  //     this.recipesService
  //       .getRecipesDessertsSpoon()
  //       .subscribe((SpoonacularApiData) => {
  //         this.showRecipes = SpoonacularApiData.results;
  //       });
  //   } else if (this.selectedBtn === 'sides') {
  //     this.recipesService
  //       .getRecipesSidesSpoon()
  //       .subscribe((SpoonacularApiData) => {
  //         this.showRecipes = SpoonacularApiData.results;
  //       });
  //   }
  //   console.log(this.showRecipes);
  // }
}
