import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
    imports: [
	CommonModule,
	AdminRoutingModule
    ],
    declarations: [DashboardComponent, AdminComponent]
})
export class AdminModule { }
