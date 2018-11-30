import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }     from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsCreationPageComponent } from './news-creation-page/news-creation-page.component';

const routes: Routes = [
    { path: 'admin', component: AdminComponent, children: [
	{ path: '',     component: DashboardComponent },
	{ path: 'news', component: NewsCreationPageComponent }
    ] }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}
