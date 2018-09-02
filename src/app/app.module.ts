import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ConstructionPageComponent } from './construction-page/construction-page.component';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeHeaderComponent } from './home-header/home-header.component';

@NgModule({
    declarations: [
	AppComponent,
	ConstructionPageComponent,
	HomePageComponent,
	HomeHeaderComponent
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
