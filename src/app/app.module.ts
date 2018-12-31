import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule }      from '@angular/service-worker';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { FlexLayoutModule }         from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { environment }              from '../environments/environment';

// Modules
import { AdminModule }      from './admin/admin.module';
import { SiteModule }       from './site/site.module';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent }       from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
    declarations: [
	AppComponent,
	ErrorPageComponent
    ],
    imports: [
	BrowserModule,
	BrowserAnimationsModule,
	HttpClientModule,
	
	AdminModule,
	SiteModule,

	AppRoutingModule,
	FlexLayoutModule,
	AngularFontAwesomeModule,
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule { }
