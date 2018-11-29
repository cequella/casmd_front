import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }     from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsCreationPageComponent } from './news-creation-page/news-creation-page.component';
import { CardManagerPageComponent } from './card-manager-page/card-manager-page.component';

const routes: Routes = [
    { path: 'admin', component: AdminComponent, children: [
	{ path: '',     component: DashboardComponent },
	{ path: 'news', component: NewsCreationPageComponent },
	{ path: 'card', component: CardManagerPageComponent }
    ] }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}
