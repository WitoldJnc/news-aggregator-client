import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ResourceComponent} from "./view/resource/resource.component";
import {MainResourceComponent} from "./view/main-resource/main-resource.component";

const routes: Routes = [
    {path: '', component: MainResourceComponent},
    {path: 'res/:res', component: ResourceComponent},
    {path: 'main', component: MainResourceComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
