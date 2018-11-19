import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService }   from '../auth-guard.service';
import { AdminComponent }     from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: 'dashboard', component: AdminComponent, canActivate:[AuthGuardService], children: [
	{ path: '', component: DashboardComponent }
    ] }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}
