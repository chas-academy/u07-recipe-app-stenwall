import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { RecipesService } from '../../services/recipes.service';

import { Recipe } from '../../models/api-data.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  // ngOnInit(): void {
  //   this.recipesService.getRecipes()
  //   .subscribe((result: HttpResponse<Object>) => {
  //       console.log(result);
  //       // this.recipes = result.body;
  //     });
  // }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(ApiData => {
      this.recipes = ApiData.hits.map(hit => hit.recipe);
    });
  }
}
