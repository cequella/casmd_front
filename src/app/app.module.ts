import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }      from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConstructionPageComponent } from './construction-page/construction-page.component';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { NewHeadlineComponent } from './new-headline/new-headline.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';

@NgModule({
    declarations: [
	AppComponent,
	ConstructionPageComponent,
	HomePageComponent,
	HomeHeaderComponent,
	TimeLineComponent,
	NewHeadlineComponent,
	DocumentationPageComponent
    ],
    imports: [
	BrowserModule,
	BrowserAnimationsModule,
	MaterialModulesModule,
	HttpClientModule,
	AppRoutingModule,
	FlexLayoutModule,
	FormsModule,
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
