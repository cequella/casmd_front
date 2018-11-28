import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService }   from './auth-guard.service';

import { LoginPageComponent }         from './login-page/login-page.component';
import { HomePageComponent }          from './home-page/home-page.component';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { CrowdfundingPageComponent }  from './crowdfunding-page/crowdfunding-page.component';
import { CrowdfundingItemComponent }  from './crowdfunding-item/crowdfunding-item.component';
import { ErrorPageComponent }         from './error-page/error-page.component';
import { NewsPageComponent }          from './news-page/news-page.component';

const routes: Routes = [
    { path: '',              component: HomePageComponent },
    { path: 'dashboard',     redirectTo: 'admin', pathMatch: 'full', canActivate:[AuthGuardService] },
    { path: 'login',         component: LoginPageComponent },
    { path: 'documentos',    component: DocumentationPageComponent },
    { path: 'vaquinhas',     component: CrowdfundingPageComponent },
    { path: 'vaquinhas/:id', component: CrowdfundingItemComponent },
    { path: 'noticia/:id',   component: NewsPageComponent },
    { path: '**',            component: ErrorPageComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
