import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
// import { EdamamApiData } from '../models/api-edamam.model';
import { SpoonacularApiData, Recipe } from '../models/api-spoonacular.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  // private edaAppKey: string;
  // private edaAppId: string;
  // private edaApiUrl: string;

  private spoonApiUrl: string;
  private spoonApiKey: string;

  constructor(private http: HttpClient) {
    // this.edaAppKey = environment.EDA_APP_KEY;
    // this.edaAppId = environment.EDA_APP_ID;
    // this.edaApiUrl = environment.EDA_API_URL;

    this.spoonApiUrl = environment.SPOON_API_URL;
    this.spoonApiKey = environment.SPOON_API_KEY;
  }

  // get main courses from Spoonacular
  getRecipesMainsSpoon(): Observable<SpoonacularApiData> {
    return this.http.get<SpoonacularApiData>(
      this.spoonApiUrl + 'complexSearch',
      {
        params: new HttpParams()
          .append('diet', 'vegetarian')
          .append('type', 'main+course')
          .append('number', '30')
          .append('apiKey', this.spoonApiKey),
      }
    );
  }

  // get appetizers from Spoonacular
  getRecipesAppzSpoon(): Observable<SpoonacularApiData> {
    return this.http.get<SpoonacularApiData>(
      this.spoonApiUrl + 'complexSearch',
      {
        params: new HttpParams()
          .append('diet', 'vegetarian')
          .append('type', 'appetizer')
          .append('number', '30')
          .append('apiKey', this.spoonApiKey),
      }
    );
  }

  // get desserts from Spoonacular
  getRecipesDessertsSpoon(): Observable<SpoonacularApiData> {
    return this.http.get<SpoonacularApiData>(
      this.spoonApiUrl + 'complexSearch',
      {
        params: new HttpParams()
          .append('diet', 'vegetarian')
          .append('type', 'dessert')
          .append('number', '30')
          .append('apiKey', this.spoonApiKey),
      }
    );
  }

  // get side dishes from Spoonacular
  getRecipesSidesSpoon(): Observable<SpoonacularApiData> {
    return this.http.get<SpoonacularApiData>(
      this.spoonApiUrl + 'complexSearch',
      {
        params: new HttpParams()
          .append('diet', 'vegetarian')
          .append('type', 'side+dish')
          .append('number', '30')
          .append('apiKey', this.spoonApiKey),
      }
    );
  }

  getRandomRecipesSpoon(): Observable<SpoonacularApiData> {
    return this.http.get<SpoonacularApiData>(
      this.spoonApiUrl + 'random',
      {
        params: new HttpParams()
          .append('tags', 'vegetarian')
          .append('number', '30')
          .append('apiKey', this.spoonApiKey),
      }
    );
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
