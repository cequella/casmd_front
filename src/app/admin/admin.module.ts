import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
	 ReactiveFormsModule
       } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { NewsCreationPageComponent } from './news-creation-page/news-creation-page.component';
import { CardManagerPageComponent } from './card-manager-page/card-manager-page.component';

@NgModule({
    imports: [
	CommonModule,
	AdminRoutingModule,
	MaterialModulesModule,
	FormsModule,
	ReactiveFormsModule
    ],
    declarations: [
	DashboardComponent,
	AdminComponent,
	NewsCreationPageComponent,
	CardManagerPageComponent
    ]
})
export class AdminModule { }
