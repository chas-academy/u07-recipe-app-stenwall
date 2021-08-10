import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { List, ListData } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  lists: List[];
  list: List;
  isRecipeInList: boolean;
  // recipeInListChange: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient
  ) {
    // this.recipeInListChange.subscribe((value) => (this.isRecipeInList = value));
  }

  getAllLists(): Observable<List[]> {
    return this.http.get<ListData['list']>('http://u08-recipe-api.test/api/lists');
  }

  getList(id: number | string): Observable<List> {
    return this.http.get<List>(`http://u08-recipe-api.test/api/lists/show/${id}`);
  }

  addNewList(title: string, user_id: number | string): Observable<any> {
    return this.http.post('http://u08-recipe-api.test/api/lists/store', title);
  }

  // removeList(): Observable<any> {
  //   return this.http.get('http://u08-recipe-api.test/api/lists/store');
  // }

  // updateList(): Observable<any> {
  //   return this.http.get('http://u08-recipe-api.test/api/lists/store');
  // }

  // addToList(id: number, user_id: number, title: string, img: string) {
  //   const idExists = this.lists.some((listItem) => listItem.id === id);
  //   if (!idExists) {
  //     this.lists.push({
  //       id,
  //       user_id,
  //       title,
  //     });
  //   }
  // }

  // removeFromList(id: number) {
  //   const position = this.list.findIndex((recipe) => recipe.id === id);
  //   if (position >= 0) this.list.splice(position, 1);
  // }

  // checkIfRecipeInList(id: number): boolean {
  //   const idExists = this.list.some((listItem) => listItem.id === id);
  //   if (idExists) return true;
  //   else return false;
  // }
}
