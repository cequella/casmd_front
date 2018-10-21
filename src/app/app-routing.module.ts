import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { AdminDescriptionPageComponent } from './admin-description-page/admin-description-page.component';

const routes: Routes = [
    { path: '',                  component: HomePageComponent },
    { path: 'sobre',             component: AboutPageComponent },
    { path: 'admin/login',       component: AdminLoginPageComponent },
    { path: 'admin/description', component: AdminDescriptionPageComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
