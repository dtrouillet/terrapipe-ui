import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ConfigurationService} from './core/configuration.service';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test = false;
  stickyTop = true;
  authCodeFlowConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'http://idp.localfaya.fr/realms/test',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/',

    // The SPA's id. The SPA is registerd with this id at the auth-server
    // clientId: 'server.code',
    clientId: 'terrapipe',
    dummyClientSecret: 'bd4jKmWx8BeJwXynREvVZK533tEypAmN',
    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',

    responseType: 'code',
    requireHttps: false,

    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    scope: 'openid profile email read',

    showDebugInformation: true
  };

  constructor(private router: Router, private configurationService: ConfigurationService,
              private oauthService: OAuthService) {
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

    this.oauthService.configure(this.authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
