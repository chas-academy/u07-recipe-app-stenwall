import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dietary-preferences',
  templateUrl: './dietary-preferences.component.html',
  styleUrls: ['./dietary-preferences.component.scss'],
})
export class DietaryPreferencesComponent implements OnInit {
  vegan: boolean;
  dairyFree: boolean;
  glutenFree: boolean;
  message: string = '';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    console.log(event);
    console.log(event.checked);
    console.log(event.source.id);
    if (event.source.id === 'veganSlide' && event.checked) {
      this.vegan = true;
      console.log(this.vegan);
    }
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}

// source to sending data from child to parent:
// -----------------------------------------------------------------------
// https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/