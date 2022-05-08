import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from "ng-apexcharts";
import {ShareModule} from "./share/share.module";
import {TablerIconsModule} from "angular-tabler-icons";
import * as TablerIcons from "angular-tabler-icons/icons";

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
        NgApexchartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
