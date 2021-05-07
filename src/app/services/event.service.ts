import { Injectable, Output, EventEmitter } from '@angular/core';
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
    if (preferences['vegan']) {
      preferenceQuery = 'vegan,';
    }
    if (preferences['dairyFree']) {
      preferenceQuery += 'dairy+free';
    }
    if (preferences['glutenFree']) {
      preferenceQuery += 'gluten+free';
    }
    this.preferenceString.next(preferenceQuery);
  }

  // subject: BehaviorSubject<any>;

  // constructor() {
  //   this.subject = new BehaviorSubject(null);
  // }

  // getObservable() {
  //   return this.subject.asObservable();
  // }

  // updateValue(value) {
  //   this.subject.next(value);
  // }
}
