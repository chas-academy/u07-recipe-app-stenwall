import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { List, ListData } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private u08ApiUrl: string;
  lists: List[];
  list: List;
  isRecipeInList: boolean;
  // recipeInListChange: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient
  ) {
    this.u08ApiUrl = environment.U08_API_URL;
    // this.recipeInListChange.subscribe((value) => (this.isRecipeInList = value));
  }

  getAllLists(): Observable<List[]> {
    return this.http.get<ListData['list']>(`${this.u08ApiUrl}/api/lists`);
  }

  getList(id: number | string): Observable<List> {
    return this.http.get<List>(`${this.u08ApiUrl}/api/lists/${id}`);
  }

  addNewList(title: string): Observable<any> {
    return this.http.post(`${this.u08ApiUrl}/api/lists`, title);
  }

  // addNewList(title: string, user_id: number | string): Observable<any> {
  //   return this.http.post('http://u08-recipe-api.test/api/lists/store', title);
  // }

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
