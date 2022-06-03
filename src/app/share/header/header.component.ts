import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ConfigurationService} from '../../core/configuration.service';
import {OAuthService} from 'angular-oauth2-oidc';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarCollapsed: boolean = false;
  private darkMode: boolean = false;
  username: string = "";

  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2,
              private configurationService: ConfigurationService,
              private oauthService: OAuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.oauthService.events.subscribe(e => console.log(e));
    this.oauthService.tryLogin({
      onTokenReceived: context => {
        //
        // Output just for purpose of demonstration
        // Don't try this at home ... ;-)
        //
        console.debug("logged in");
        console.debug(context);
      }
    });

    const claim = this.oauthService.getIdentityClaims() as any;
    if (claim) {
      this.username = claim.name;
    }
    this.configurationService.getNavbarCollapsed().subscribe(value => {
      this.navbarCollapsed = value;
    });
    this.configurationService.getDarkMode().subscribe(value => {
      this.darkMode = value;
      if(this.darkMode){
        this.renderer.addClass(this.document.body, 'theme-dark');
        this.renderer.removeClass(this.document.body, 'theme-light');
      }else {
        this.renderer.removeClass(this.document.body, 'theme-dark');
        this.renderer.addClass(this.document.body, 'theme-light');
      }
    });
  }


  swithTheme(){
    this.configurationService.toggletDarkMode();
  }

  toggleNavbar() {
    this.configurationService.toggleNavbarCollapsed()
  }

  logout() {
    this.oauthService.revokeTokenAndLogout().then(
      () => this.router.navigate(['/auth/signin'])
    )
  }

}
