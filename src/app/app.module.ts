import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {ShareModule} from './share/share.module';
import {TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import {ApiModule, Configuration} from 'terrapipe-api';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AuthService} from './auth.service';
import {OAuthModule} from 'angular-oauth2-oidc';
import {TerrapipeApiModule} from './terrapipe-api/terrapipe-api.module';

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
        ApiModule,
        HttpClientModule,
        OAuthModule.forRoot(),
        TerrapipeApiModule
    ],
    providers: [ {
        provide: Configuration,
        useFactory: (authService: AuthService) => new Configuration(
            {
                basePath: environment.apiUrl,
                accessToken: authService.getAccessToken.bind(authService)
            }
        ),
        deps: [AuthService],
        multi: false
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
