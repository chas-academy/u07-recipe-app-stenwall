import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dietary-preferences',
  templateUrl: './dietary-preferences.component.html',
  styleUrls: ['./dietary-preferences.component.scss'],
})
export class DietaryPreferencesComponent implements OnInit {
  preferences: object = {
    vegan: false,
    dairyFree: false,
    glutenFree: false,
  };

  @Output() slideEvent = new EventEmitter<object>();

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    if (this.preferences.hasOwnProperty(event.source.name)) {
      this.preferences[event.source.name] = event.checked;
    }
    this.slideEvent.emit(this.preferences);
  }
}

// source to sending data from child to parent:
// -----------------------------------------------------------------------
// https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/