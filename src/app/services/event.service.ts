import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private preferencesSource = new BehaviorSubject<object>({
    vegan: false,
    dairyFree: false,
    glutenFree: false,
  });
  private preferenceString = new BehaviorSubject<string>('');

  currentPreferences = this.preferencesSource.asObservable();
  currentPreferenceQuery = this.preferenceString.asObservable();

  constructor() {}

  changePreferences(preferences: object) {
    this.preferencesToString(preferences);
    this.preferencesSource.next(preferences);
  }

  preferencesToString(preferences: object) {
    let preferenceQuery = '';

    preferences['vegan'] && (preferenceQuery = 'vegan,');
    preferences['dairyFree'] && (preferenceQuery += 'dairy+free,');
    preferences['glutenFree'] && (preferenceQuery += 'gluten+free');

    this.preferenceString.next(preferenceQuery);
  }
}
