import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private stickyTop = new BehaviorSubject(true);
  private navbarCollpsed = new BehaviorSubject(false);

  constructor() {
  }

  getStickyTop(): Observable<boolean> {
    return this.stickyTop.asObservable();
  }

  toggletStickyTop(): void {
    if (this.stickyTop.getValue()) {
      this.stickyTop.next(false);
    } else {
      this.stickyTop.next(true);
    }
  }


  getNavbarCollapsed(): Observable<boolean> {
    return this.navbarCollpsed.asObservable();
  }

  toggleNavbarCollapsed(): void {
    if (this.navbarCollpsed.getValue()) {
      this.navbarCollpsed.next(false);
    } else {
      this.navbarCollpsed.next(true);
    }
  }


}
