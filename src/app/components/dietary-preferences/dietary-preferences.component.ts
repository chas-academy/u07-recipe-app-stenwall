import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dietary-preferences',
  templateUrl: './dietary-preferences.component.html',
  styleUrls: ['./dietary-preferences.component.scss'],
})
export class DietaryPreferencesComponent implements OnInit {
  vegan: boolean;
  dairyFree: boolean;
  glutenFree: boolean;

  constructor() {}

  ngOnInit(): void {}
}
