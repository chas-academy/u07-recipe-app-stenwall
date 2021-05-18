import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import {
  SpoonacularApiData,
  SpoonacularRandomApiData,
  Recipe,
} from '../models/api-spoonacular.model';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private spoonApiUrl: string;
  private spoonApiKey: string;

  deafultParams = new HttpParams()
    .append('query', 'foodista')
    .append('number', '30');

  constructor(private http: HttpClient) {
    this.spoonApiUrl = environment.SPOON_API_URL;
    this.spoonApiKey = environment.SPOON_API_KEY;
  }

  getDishTypeRecipes(
    dishType: string,
    preferences: string
  ): Observable<SpoonacularApiData> {
    const observable = this.http
      .get<SpoonacularApiData>(this.spoonApiUrl + 'complexSearch', {
        params: this.deafultParams
          .append('type', dishType)
          .append('diet', `vegetarian,${preferences}`)
          .append('apiKey', this.spoonApiKey),
      })
      .pipe(share());
    // observable.subscribe((data) => console.log(data));
    return observable;
  }

  getRandomRecipes(preferences: string): Observable<SpoonacularRandomApiData> {
    return this.http.get<SpoonacularRandomApiData>(
      this.spoonApiUrl + 'random',
      {
        params: this.deafultParams
          .append('tags', `vegetarian,${preferences}`)
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
