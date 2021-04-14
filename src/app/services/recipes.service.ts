import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { EdamamApiData } from '../models/api-edamam.model';
import { SpoonacularApiData } from '../models/api-spoonacular.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private edaAppKey: string;
  private edaAppId: string;
  private edaApiUrl: string;

  private spoonApiUrl: string;
  private spoonApiKey: string;

  constructor(private http: HttpClient) {
    this.edaAppKey = environment.EDA_APP_KEY;
    this.edaAppId = environment.EDA_APP_ID;
    this.edaApiUrl = environment.EDA_API_URL;

    this.spoonApiUrl = environment.SPOON_API_URL;
    this.spoonApiKey = environment.SPOON_API_KEY;
  }

  // get recipes from Edamam
  getRecipesEda(): Observable<EdamamApiData> {
    const params = new HttpParams()
      .append('q', 'vegetarian')
      .append('app_key', this.edaAppKey)
      .append('app_id', this.edaAppId);
    const test = this.http.get<EdamamApiData>(this.edaApiUrl, {
      params: params,
    });
    return test;
  }

  // get recipes from Spoonacular
  getRecipesSpoon(): Observable<SpoonacularApiData> {
    const params = new HttpParams()
      .append('diet', 'vegetarian')
      .append('apiKey', this.spoonApiKey)
    const test = this.http.get<SpoonacularApiData>(this.spoonApiUrl, {
      params: params,
    });
    return test;
  }
}
