import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {ResourceComponent} from "./view/resource/resource.component";
import { MainResourceComponent } from './view/main-resource/main-resource.component';
import { ByCatigoriesPipe } from './service/by-catigories.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ResourceComponent,
        MainResourceComponent,
        ByCatigoriesPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
