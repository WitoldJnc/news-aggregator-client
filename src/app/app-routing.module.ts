import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResourceComponent} from "./view/resource/resource.component";

const routes: Routes = [
    {path: '', component: ResourceComponent},
    {path: 'res/:res', component: ResourceComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
