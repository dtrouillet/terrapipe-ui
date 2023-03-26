import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Configuration} from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private stickyTop = new BehaviorSubject(true);
  private navbarCollapsed = new BehaviorSubject(false);
  private darkMode = new BehaviorSubject(false);
  baseUrl: string = "";
  apiUrl: string = "";
  issuer: string = ""

  private configuration: Configuration = {
    stickyTop: true,
    navbarCollapsed: true,
    darkMode: false,
    baseUrl: this.baseUrl,
    apiUrl: this.apiUrl,
    issuer: this.issuer
  }

  constructor() {
    let localConfiguration = localStorage.getItem('configuration');
    if (localConfiguration) {
      this.configuration = JSON.parse(localConfiguration);
      this.stickyTop.next(this.configuration.stickyTop)
      this.navbarCollapsed.next(this.configuration.navbarCollapsed)
      this.darkMode.next(this.configuration.darkMode)
    }else {
      localStorage.setItem('configuration', JSON.stringify(this.configuration));
    }
  }

  getStickyTop(): Observable<boolean> {
    return this.stickyTop.asObservable();
  }

  getDarkMode(): Observable<boolean> {
    return this.darkMode.asObservable();
  }

  toggletDarkMode(): void {
    if (this.darkMode.getValue()) {
      this.darkMode.next(false);
      this.configuration.darkMode = false;
      localStorage.setItem('configuration', JSON.stringify(this.configuration));
    } else {
      this.darkMode.next(true);
      this.configuration.darkMode = true;
      localStorage.setItem('configuration', JSON.stringify(this.configuration));
    }
  }

  toggletStickyTop(): void {
    if (this.stickyTop.getValue()) {
      this.stickyTop.next(false);
      this.configuration.stickyTop = false;
      localStorage.setItem('configuration', JSON.stringify(this.configuration));
    } else {
      this.stickyTop.next(true);
      this.configuration.stickyTop = true;
      localStorage.setItem('configuration', JSON.stringify(this.configuration));
    }
  }


  getNavbarCollapsed(): Observable<boolean> {
    return this.navbarCollapsed.asObservable();
  }

  toggleNavbarCollapsed(): void {
    if (this.navbarCollapsed.getValue()) {
      this.navbarCollapsed.next(false);
      this.configuration.navbarCollapsed = false;
      localStorage.setItem('configuration', JSON.stringify(this.configuration));
    } else {
      this.navbarCollapsed.next(true);
      this.configuration.navbarCollapsed = true;
      localStorage.setItem('configuration', JSON.stringify(this.configuration));
    }
  }


}
