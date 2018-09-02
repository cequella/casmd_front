import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ConstructionPageComponent } from './construction-page/construction-page.component';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
    declarations: [
	AppComponent,
	ConstructionPageComponent,
	HomePageComponent
    ],
    imports: [
	BrowserModule,
	BrowserAnimationsModule,
	MaterialModulesModule,
	HttpClientModule,
	AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
