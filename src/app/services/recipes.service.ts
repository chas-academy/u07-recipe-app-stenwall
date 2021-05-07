import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { environment } from '../../environments/environment';
// import { EdamamApiData } from '../models/api-edamam.model';
import {
  SpoonacularApiData,
  SpoonacularRandomApiData,
  Recipe
} from '../models/api-spoonacular.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  // private edaAppKey: string;
  // private edaAppId: string;
  // private edaApiUrl: string;

  private spoonApiUrl: string;
  private spoonApiKey: string;

  defaultParams;

  constructor(private http: HttpClient) {
    // this.edaAppKey = environment.EDA_APP_KEY;
    // this.edaAppId = environment.EDA_APP_ID;
    // this.edaApiUrl = environment.EDA_API_URL;

    this.spoonApiUrl = environment.SPOON_API_URL;
    this.spoonApiKey = environment.SPOON_API_KEY;
  }

  deafultParams = new HttpParams()
    .append('query', 'foodista')
    .append('diet', 'vegetarian')
    .append('number', '30');

  getDishTypeRecipes(dishType: string, preferences: string): Observable<SpoonacularApiData> {
    const obs = this.http.get<SpoonacularApiData>(
      this.spoonApiUrl + 'complexSearch',
      {
        params: this.deafultParams
          .append('type', dishType)
          .append('tags', preferences)
          .append('apiKey', this.spoonApiKey),
      }
    )
    .pipe(share());
    obs.subscribe(data => console.log(data));
    return obs;
  }

  getRandomRecipes(preferences: string): Observable<SpoonacularRandomApiData> {
    return this.http.get<SpoonacularRandomApiData>(
      this.spoonApiUrl + 'random',
      {
        params: new HttpParams()
          .append('query', 'foodista')
          .append('tags', `vegetarian,${preferences}`)
          .append('number', '30')
          .append('apiKey', this.spoonApiKey),
      }
    );
  }

  // get main courses from Spoonacular
  getRecipesMainsSpoon(): Observable<SpoonacularApiData> {
    return this.http.get<SpoonacularApiData>(
      this.spoonApiUrl + 'complexSearch',
      {
        params: this.deafultParams
          .append('type', 'main+course')
          .append('apiKey', this.spoonApiKey),
      }
    );
  }

  // get appetizers from Spoonacular
  getRecipesAppzSpoon(): Observable<SpoonacularApiData> {
    return this.http.get<SpoonacularApiData>(
      this.spoonApiUrl + 'complexSearch',
      {
        params: this.deafultParams
          .append('type', 'appetizer')
          .append('apiKey', this.spoonApiKey),
      }
    );
  }

  // get desserts from Spoonacular
  getRecipesDessertsSpoon(): Observable<SpoonacularApiData> {
    return this.http.get<SpoonacularApiData>(
      this.spoonApiUrl + 'complexSearch',
      {
        params: this.deafultParams
          .append('type', 'dessert')
          .append('apiKey', this.spoonApiKey),
      }
    );
  }

  // get side dishes from Spoonacular
  getRecipesSidesSpoon(): Observable<SpoonacularApiData> {
    return this.http.get<SpoonacularApiData>(
      this.spoonApiUrl + 'complexSearch',
      {
        params: this.deafultParams
          .append('type', 'side+dish')
          .append('apiKey', this.spoonApiKey),
      }
    );
  }

  getRandomRecipesSpoon(): Observable<SpoonacularRandomApiData> {
    return this.http.get<SpoonacularRandomApiData>(
      this.spoonApiUrl + 'random',
      {
        params: new HttpParams()
          .append('query', 'foodista')
          .append('tags', 'vegetarian')
          .append('number', '30')
          .append('apiKey', this.spoonApiKey),
      }
    );
  }

  getDetailedRecipe(id: number | string): Observable<Recipe> {
    return this.http.get<Recipe>(this.spoonApiUrl + id + '/information', {
      params: new HttpParams().append('apiKey', this.spoonApiKey),
    });
  }

  // get recipes from Edamam
  // getRecipesEda(): Observable<EdamamApiData> {
  //   const params = new HttpParams()
  //     .append('q', 'veg')
  //     .append('diets', 'vegetarian')
  //     .append('app_key', this.edaAppKey)
  //     .append('app_id', this.edaAppId);
  //   const test = this.http.get<EdamamApiData>(this.edaApiUrl, {
  //     params: params,
  //   });
  //   return test;
  // }

  // get recipes from Spoonacular
  // getRecipesSpoon(): Observable<SpoonacularApiData> {
  //   const params = new HttpParams()
  //     .append('query', 'garlic')
  //     .append('addRecipeInformation', 'true')
  //     .append('diet', 'vegetarian')
  //     .append('apiKey', this.spoonApiKey);
  //   const test = this.http.get<SpoonacularApiData>(
  //     this.spoonApiUrl + 'complexSearch',
  //     { params: params }
  //   );
  //   return test;
  // }

  // get recipe from Spoonacular
  // getRecipesId(id: string): Observable<Recipe> {
  //   const params = new HttpParams()
  //     .append('includeNutrition', 'false')
  //     .append('apiKey', this.spoonApiKey);
  //   const test = this.http.get<Recipe>(
  //     `${this.spoonApiUrl}/${id}/information`,
  //     { params: params }
  //   );
  //   return test;
  // }
}
