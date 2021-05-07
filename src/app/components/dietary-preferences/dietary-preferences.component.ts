import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  // @Output() slideEvent = new EventEmitter<object>();

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.subscription = this.eventService.currentPreferences.subscribe(
      (preferences) => (this.preferences = preferences)
    );
  }

  onChange(event) {
    if (this.preferences.hasOwnProperty(event.source.name)) {
      this.preferences[event.source.name] = event.checked;
    }
      this.eventService.changePreferences(this.preferences);
    // this.slideEvent.emit(this.preferences);
    console.log(this.preferences);
  }
}

// source to sending data between components:
// -----------------------------------------------------------------------
// https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/