import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent }       from './home-page/home-page.component';
import { AboutPageComponent }      from './about-page/about-page.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { ConstructionPageComponent } from './construction-page/construction-page.component';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { AppRoutingModule } from './/app-routing.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { NewHeadlineComponent } from './new-headline/new-headline.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AdminDescriptionPageComponent } from './admin-description-page/admin-description-page.component';

@NgModule({
    declarations: [
	AppComponent,
	ConstructionPageComponent,

	HomePageComponent,
	AdminLoginPageComponent,
	AboutPageComponent,
	
	HomeHeaderComponent,
	TimeLineComponent,
	NewHeadlineComponent,
	AdminDescriptionPageComponent,
    ],
    imports: [
	FormsModule,
	ReactiveFormsModule,
	BrowserModule,
	BrowserAnimationsModule,
	MaterialModulesModule,
	HttpClientModule,
	AppRoutingModule,
	FlexLayoutModule,
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
