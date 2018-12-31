import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
    { path: '',      redirectTo: '', pathMatch: 'full' },
    { path: 'login', redirectTo: 'login', pathMatch: 'full' },
    { path: 'admin', redirectTo: 'admin', pathMatch: 'full' },
    { path: '**',    component: ErrorPageComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
