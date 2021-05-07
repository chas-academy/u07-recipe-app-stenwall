import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  list: List[] = [];

  constructor() {}

  addToList(id: number, title: string, image: string) {
    const idExists = this.list.some(listItem => listItem.id === id);
    console.log(idExists);
    if (!idExists) {
      this.list.push({
        id,
        title,
        image,
      });
    }
    console.log(this.list);
  }

//   this.list.some(listItem => listItem[id] === id);
// console.log(anyAdult); // true


//   this.list.forEach((element, index, array) => {
//     console.log(element.x); // 100, 200, 300
//     console.log(index); // 0, 1, 2
//     console.log(array); // same myArray object 3 times
// });

//   this.list.forEach(
//     ((arrayItem) => {
//     var x = arrayItem.prop1 + 2;
//     console.log(x);
// });
//    (key) => { if (this.list[key] != id) {

//     }
//     // use val
// });

  // onChange(event) {
  //   if (this.preferences.hasOwnProperty(event.source.name)) {
  //     this.preferences[event.source.name] = event.checked;
  //   }
  //   this.eventService.changePreferences(this.preferences);
  //   // this.slideEvent.emit(this.preferences);
  //   console.log(this.preferences);
  // }

  // removeFromList

  // var removeItem = obj.results.filter(function (val) {
  //           return val.id !== "460";
  //       });

  //       function removeFunction(myObjects, prop, valu) {
  //           var newArray = myObjects.filter(function (val) {
  //               return val[prop] !== valu;
  //           });
  //           return newArray;
  //       }

  //       //alert(valuesWith460[0].name);
  //       console.log(removeFunction(obj.results, "name", "Widget 3"));
}
