import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }            from './admin.component';
import { DashboardComponent }        from './dashboard/dashboard.component';
import { NewsCreationPageComponent } from './news-creation-page/news-creation-page.component';
import { LoginPageComponent }        from './login-page/login-page.component';
import { StudentCardPageComponent }  from './student-card-page/student-card-page.component';
import { PostPageComponent }         from './post-page/post-page.component';

import { AuthGuardService } from '../auth-guard.service';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'admin', component: AdminComponent, canActivate:[AuthGuardService], children: [
	{ path: '',      component: DashboardComponent },
	{ path: 'news',  component: PostPageComponent },//NewsCreationPageComponent },
	{ path: 'cards', component: StudentCardPageComponent }
    ] }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}
