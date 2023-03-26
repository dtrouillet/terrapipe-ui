import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {ShareModule} from './share/share.module';
import {TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AuthService} from './auth.service';
import {OAuthModule} from 'angular-oauth2-oidc';
import {TerrapipeApiModule} from './terrapipe-api/terrapipe-api.module';
import {ConfigurationService} from './core/configuration.service';
import {InitConfigService} from './core/init-config.service';
import {CoreModule} from './core/core.module';

export function load(initConfigService: InitConfigService) {
  return () => initConfigService.loadConfig();
}

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      ShareModule,
      TablerIconsModule.pick(TablerIcons),
      NgApexchartsModule,
      CoreModule,
      // ApiModule,
      HttpClientModule,
      OAuthModule.forRoot(),
      TerrapipeApiModule
    ],
    // providers: [ {
    //     provide: Configuration,
    //     useFactory: (authService: AuthService, configurationService: ConfigurationService) => new Configuration(
    //         {
    //             basePath: configurationService.baseUrl,
    //             accessToken: authService.getAccessToken.bind(authService)
    //         }
    //     ),
    //     deps: [ConfigurationService, AuthService],
    //     multi: false
    // }],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: load,
      deps: [
        InitConfigService
      ],
      multi: true
    }],
  bootstrap: [AppComponent]
})

export class AppModule {
}
