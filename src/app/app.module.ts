import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {ResourceComponent} from "./view/resource/resource.component";
import {ByCatigoriesPipe} from './service/by-catigories.pipe';
import {NewsNotNullPipe} from './service/news-not-null.pipe';
import {BySearchPipe} from './service/by-search.pipe';
import {SearchByPipe} from "./service/search-by.pipe";

@NgModule({
    declarations: [
        AppComponent,
        ResourceComponent,
        ByCatigoriesPipe,
        NewsNotNullPipe,
        BySearchPipe,
        SearchByPipe,
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
