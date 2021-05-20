import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dietary-preferences',
  templateUrl: './dietary-preferences.component.html',
  styleUrls: ['./dietary-preferences.component.scss'],
})
export class DietaryPreferencesComponent implements OnInit {
  preferences: object;
  subscription: Subscription;
  panelOpenState = false;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.subscription = this.eventService.currentPreferences.subscribe(
      (preferences) => (this.preferences = preferences)
    );
  }

  onChange(event: any): void {
    if (this.preferences.hasOwnProperty(event.source.name)) {
      this.preferences[event.source.name] = event.checked;
    }
    this.eventService.changePreferences(this.preferences);
  }
}

// source to sending data between components:
// -----------------------------------------------------------------------
// https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/
