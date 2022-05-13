import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private stickyTop = new BehaviorSubject(true);

  constructor() {
  }

  getStickyTop(): Observable<boolean> {
    return this.stickyTop.asObservable();
  }

  setStickyTop(stickyTop: boolean): void {
    this.stickyTop.next(stickyTop);
  }

  toggletStickyTop(): void {
    if (this.stickyTop.getValue()) {
      this.stickyTop.next(false);
    } else {
      this.stickyTop.next(true);
    }
  }
}
