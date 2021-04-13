import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { EdamamApiData } from '../models/api-edamam.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private appKey: string;
  private appId: string;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.appKey = environment.APP_KEY;
    this.appId = environment.APP_ID;
    this.apiUrl = environment.API_URL;
  }

  // get recipes
  getRecipes(): Observable<EdamamApiData> {
    const params = new HttpParams()
      .append('q', 'vegetarian')
      .append('app_key', this.appKey)
      .append('app_id', this.appId);
    const test = this.http.get<EdamamApiData>(this.apiUrl, {
      params: params,
    });
    console.log(params);
    console.log(test);
    return test;
  }
}
