import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent }         from './login-page/login-page.component';
import { HomePageComponent }          from './home-page/home-page.component';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { CrowdfundingPageComponent }  from './crowdfunding-page/crowdfunding-page.component';
import { CrowdfundingItemComponent }  from './crowdfunding-item/crowdfunding-item.component';

const routes: Routes = [
    { path: '',              component: HomePageComponent },
    { path: 'admin',         redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login',         component: LoginPageComponent },
    { path: 'documentos',    component: DocumentationPageComponent },
    { path: 'vaquinhas',     component: CrowdfundingPageComponent },
    { path: 'vaquinhas/:id', component: CrowdfundingItemComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
