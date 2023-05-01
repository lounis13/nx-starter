import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject(false);
  darkMode$ = this.darkMode.asObservable();

  toggleDarkMode(): void {
    this.darkMode.next(!this.darkMode.value);
  }
}
