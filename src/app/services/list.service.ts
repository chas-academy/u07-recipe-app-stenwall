import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { List, ListData } from '../models/list.model';
import { ListRecipe, ListRecipeData } from '../models/list-recipe.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private u08ApiUrl: string;
  // lists: List[];
  // list: List;

  constructor(private http: HttpClient) {
    this.u08ApiUrl = environment.U08_API_URL;
  }

  // get all lists belonging to logged in user
  getAllLists(): Observable<List[]> {
    return this.http.get<ListData['list']>(`${this.u08ApiUrl}/api/lists`);
  }

  // create a new list
  addNewList(title: string): Observable<any> {
    return this.http.post(`${this.u08ApiUrl}/api/lists`, title);
  }

  // update given list
  updateList(title: string, id: number | string): Observable<List> {
    return this.http.put<List>(`${this.u08ApiUrl}/api/lists/${id}`, title);
  }

  // delete given list
  deleteList(id: number | string): Observable<any> {
    return this.http.delete<any>(`${this.u08ApiUrl}/api/lists/${id}`);
  }

  // get all recipes belonging to given list
  getListRecipes(id: number | string): Observable<ListRecipe[]> {
    return this.http.get<ListRecipeData['recipes']>(`${this.u08ApiUrl}/api/lists/${id}/recipes`);
  }

  // add a new recipe to given list
  addRecipeToList(id: number | string, listRecipe: ListRecipe): Observable<any> {
    return this.http.post<ListRecipe>(`${this.u08ApiUrl}/api/lists/${id}/recipes`, listRecipe);
  }

  // remove given recipe from given list
  removeRecipeFromList(listId: number | string, recipeId: number | string): Observable<any> {
    return this.http.delete<any>(`${this.u08ApiUrl}/api/lists/${listId}/recipes/${recipeId}`);
  }

  // check if given recipe exists in given list
  checkIfRecipeInList(listId: number | string, apiId: number | string): Observable<any> {
    return this.http.get<any>(`${this.u08ApiUrl}/api/lists/${listId}/recipes/${apiId}`);
  }

  // get all lists where given recipe exists
  getListsWithRecipe(apiId: number | string): Observable<List[]> {
    return this.http.get<ListData['list']>(`${this.u08ApiUrl}/api/lists/${apiId}`);
  }
}
