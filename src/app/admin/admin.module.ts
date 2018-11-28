import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { NewsCreationPageComponent } from './news-creation-page/news-creation-page.component';

@NgModule({
    imports: [
	CommonModule,
	AdminRoutingModule,
	MaterialModulesModule
    ],
    declarations: [
	DashboardComponent,
	AdminComponent,
	NewsCreationPageComponent
    ]
})
export class AdminModule { }
