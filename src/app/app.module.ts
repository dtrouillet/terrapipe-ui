import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from "ng-apexcharts";
import {ShareModule} from "./share/share.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ShareModule,

        NgApexchartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
