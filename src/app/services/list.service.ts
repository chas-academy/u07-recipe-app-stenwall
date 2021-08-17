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
  lists: List[];
  list: List;
  // isRecipeInList;
  // recipeInListChange;
  // recipeInListChange: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient
  ) {
    this.u08ApiUrl = environment.U08_API_URL;
    // this.recipeInListChange.subscribe((data) => (this.checkIfRecipeInList(5, 5) = data.exists));
    // this.recipeInListChange = this.checkIfRecipeInList(5, 2).subscribe((data) => {
    //   this.isRecipeInList = data;
    //   console.log(this.isRecipeInList);
    // })
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
  getListRecipes(id: number | string): Observable<ListRecipeData> {
    return this.http.get<ListRecipeData>(`${this.u08ApiUrl}/api/lists/${id}/recipes`);
  }

  // add a new recipe to given list
  addRecipeToList(id: number | string, listRecipe: ListRecipe): Observable<ListRecipe> {
    return this.http.post<ListRecipe>(`${this.u08ApiUrl}/api/lists/${id}/recipes`, listRecipe);
  }

  // remove given recipe from given list
  removeRecipeFromList(listId: number | string, recipeId: number | string): Observable<any> {
    return this.http.delete<any>(`${this.u08ApiUrl}/api/lists/${listId}/recipes/${recipeId}`);
  }

  // check if given recipe exists in given list
  checkIfRecipeInList(listId: number | string, recipeId: number | string): Observable<any> {
    return this.http.get<any>(`${this.u08ApiUrl}/api/lists/${listId}/recipes/${recipeId}`);
  }

  isRecipeInList(id: number | string) {

  }

  // {
  //   "success": true,
  //   "recipes": [
  //     {
  //       "id": 5,
  //       "api_id": 654534,
  //       "title": "Paneer Makhani",
  //       "img": "https:\/\/spoonacular.com\/recipeImages\/654534-556x370.jpg",
  //       "created_at": "2021-08-17T08:32:55.000000Z",
  //       "updated_at": "2021-08-17T08:32:55.000000Z",
  //       "pivot": {
  //         "recipe_list_id": 6,
  //         "recipe_id": 5
  //       }
  //     }
  //   ]
  // }

  // isRecipeInList(listId: number | string, recipeId: number | string): any {
  //   let test2;
  //   const recipe = this.checkIfRecipeInList(listId, recipeId);
  //   const test = this.checkIfRecipeInList(5, 5).subscribe((data) => {
  //     test2 = data.exists;
  //   })
  //   console.log(test2);
  //   console.log(test);
  // }




  // checkIfRecipeInList(id: number): boolean {
  //   const idExists = this.list.some((listItem) => listItem.id === id);
  //   if (idExists) return true;
  //   else return false;
  // }
}
