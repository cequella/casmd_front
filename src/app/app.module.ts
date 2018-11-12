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
import { TimeLineComponent } from './time-line/time-line.component';
import { NewHeadlineComponent } from './new-headline/new-headline.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { StudentCardSearchComponent } from './student-card-search/student-card-search.component';
import { LoadingComponent } from './loading/loading.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { GlobalsService } from './globals.service';
import { HelpingFooterComponent } from './helping-footer/helping-footer.component';
import { CrowdfundingPageComponent } from './crowdfunding-page/crowdfunding-page.component';

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
	CrowdfundingPageComponent
    ],
    imports: [
	BrowserModule,
	BrowserAnimationsModule,
	MaterialModulesModule,
	HttpClientModule,
	AppRoutingModule,
	FlexLayoutModule,
	FormsModule,
	AngularFontAwesomeModule,
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [GlobalsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
