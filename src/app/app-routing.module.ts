import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
    { path: '',      redirectTo: 'site', pathMatch: 'full' },
    { path: 'admin', redirectTo: 'admin', pathMatch: 'full', canActivate:[AuthGuardService] },
    { path: '**',    component: ErrorPageComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
