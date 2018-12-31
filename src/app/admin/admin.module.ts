import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
	 ReactiveFormsModule
       } from '@angular/forms';

import { StorageServiceModule }  from 'angular-webstorage-service';
import { MaterialModulesModule } from '../material-modules.module';
import { AuthGuardService }      from '../auth-guard.service';
import { LocalStorage }          from '../local-storage';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { NewsCreationPageComponent } from './news-creation-page/news-creation-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
	CommonModule,
	AdminRoutingModule,
	MaterialModulesModule,
	StorageServiceModule,

	FormsModule,
	ReactiveFormsModule
    ],
    declarations: [
	DashboardComponent,
	AdminComponent,
	NewsCreationPageComponent,
	LoginPageComponent
    ],
    providers: [
	AuthGuardService,
	LocalStorage
    ]
})
export class AdminModule { }
