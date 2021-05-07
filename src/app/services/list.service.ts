import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  list: any[] = []

  constructor() { }

  addToList(id, label, image) {
    this.list.push({
      id,
      label,
      image,
    });
    console.log(this.list);
  }
}
