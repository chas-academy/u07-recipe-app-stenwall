import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  list: List[] = [];
  isRecipeInList: boolean;
  recipeInListChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.recipeInListChange.subscribe((value) => (this.isRecipeInList = value));
  }

  addToList(id: number, title: string, image: string) {
    const idExists = this.list.some((listItem) => listItem.id === id);
    if (!idExists) {
      this.list.push({
        id,
        title,
        image,
      });
    }
  }

  removeFromList(id: number) {
    const position = this.list.findIndex((recipe) => recipe.id === id);
    if (position >= 0) this.list.splice(position, 1);
  }

  checkIfRecipeInList(id: number): boolean {
    const idExists = this.list.some((listItem) => listItem.id === id);
    if (idExists) return true;
    else return false;
  }
}
