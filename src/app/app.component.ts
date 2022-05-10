import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ConfigurationService} from './core/configuration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test = false;
  stickyTop = true;

  constructor(private router: Router, private configurationService: ConfigurationService) {
    this.configurationService.getStickyTop().subscribe((stickyTop) => {
      this.stickyTop = stickyTop;
      console.log(stickyTop);
    });

    this.router.events.subscribe((event) => {
      if(this.router.url === '/auth/signin' || this.router.url === '/auth/signup' || this.router.url === '/homes') {
        this.test = true;
        document.body.classList.add('border-top-wide','border-primary', 'd-flex',  'flex-column');
      }else {
        this.test = false;
        document.body.classList.remove('border-top-wide','border-primary', 'd-flex',  'flex-column');
      }
    });
  }
}
