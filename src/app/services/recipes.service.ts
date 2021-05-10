import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { SpoonacularApiData, SpoonacularRandomApiData, Recipe } from '../models/api-spoonacular.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private spoonApiUrl: string;
  private spoonApiKey: string;

  defaultParams;

  constructor(private http: HttpClient) {
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

  getDetailedRecipe(id: number | string): Observable<Recipe> {
    return this.http.get<Recipe>(this.spoonApiUrl + id + '/information', {
      params: new HttpParams().append('apiKey', this.spoonApiKey),
    });
  }
}
