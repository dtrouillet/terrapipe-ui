import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if(this.router.url === '/auth/signin' || this.router.url === '/auth/signup') {
        this.test = true;
        document.body.classList.add('border-top-wide','border-primary', 'd-flex',  'flex-column');
      }else {
        this.test = false;
        document.body.classList.remove('border-top-wide','border-primary', 'd-flex',  'flex-column');
      }
    });
  }
}
