import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent }          from './home-page/home-page.component';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { LoginPageComponent }         from './login-page/login-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'documentos', component: DocumentationPageComponent },
    { path: 'admin/login', component: LoginPageComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
