import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,
	 ReactiveFormsModule
       } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConstructionPageComponent } from './construction-page/construction-page.component';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { TimeLineComponent } from './time-line/time-line.component';
import { NewHeadlineComponent } from './new-headline/new-headline.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { StudentCardSearchComponent } from './student-card-search/student-card-search.component';
import { LoadingComponent } from './loading/loading.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HelpingFooterComponent } from './helping-footer/helping-footer.component';
import { CrowdfundingPageComponent } from './crowdfunding-page/crowdfunding-page.component';
import { CrowdfundingItemComponent } from './crowdfunding-item/crowdfunding-item.component';
import { LoginPageComponent, WrongPasswordAlertDialog } from './login-page/login-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
    declarations: [
	AppComponent,
	ConstructionPageComponent,
	HomePageComponent,
	TimeLineComponent,
	NewHeadlineComponent,
	DocumentationPageComponent,
	StudentCardSearchComponent,
	LoadingComponent,
	HelpingFooterComponent,
	CrowdfundingPageComponent,
	CrowdfundingItemComponent,
	LoginPageComponent,
	WrongPasswordAlertDialog,
	ErrorPageComponent
    ],
    imports: [
	BrowserModule,
	BrowserAnimationsModule,
	MaterialModulesModule,
	HttpClientModule,
	AdminModule,
	AppRoutingModule,
	FlexLayoutModule,
	FormsModule,
	ReactiveFormsModule,
	AngularFontAwesomeModule,
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [WrongPasswordAlertDialog]
})
export class AppModule { }
