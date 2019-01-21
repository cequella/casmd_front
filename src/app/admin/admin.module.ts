import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
	 ReactiveFormsModule
       } from '@angular/forms';
import { CKEditorModule }   from '@ckeditor/ckeditor5-angular';

import { StorageServiceModule }  from 'angular-webstorage-service';
import { MaterialModulesModule } from '../material-modules.module';
import { AuthGuardService }      from '../auth-guard.service';
import { LocalStorage }          from '../local-storage';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { NewsCreationPageComponent } from './news-creation-page/news-creation-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentCardPageComponent,
	 ActionBottomSheet
       } from './student-card-page/student-card-page.component';
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
    imports: [
	CommonModule,
	AdminRoutingModule,
	MaterialModulesModule,
	StorageServiceModule,
	CKEditorModule,

	FormsModule,
	ReactiveFormsModule
    ],
    declarations: [
	DashboardComponent,
	AdminComponent,
	NewsCreationPageComponent,
	LoginPageComponent,
	StudentCardPageComponent,
	ActionBottomSheet,
	PostPageComponent
    ],
    providers: [
	AuthGuardService,
	LocalStorage
    ],
    entryComponents: [
	ActionBottomSheet
    ]
})
export class AdminModule { }
