import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import {
    MdcIconModule,
    MdcTopAppBarModule,
    MdcDrawerModule,
    MdcListModule,
    MdcTypographyModule,
    MdcCardModule,
    MdcButtonModule,
    MdcIconButtonModule,
    MdcElevationModule,
    MdcTabBarModule,
    MdcFabModule,
    MdcRippleModule,
    MdcTextFieldModule,
    MdcLinearProgressModule 
} from '@angular-mdc/web';

@NgModule({
    imports: [
	// Angular Material
	MatCardModule,
	MatListModule,
	MatIconModule,

	// MDC
	MdcIconModule,
	MdcTopAppBarModule,
	MdcDrawerModule,
	MdcListModule,
	MdcTypographyModule,
	MdcCardModule,
	MdcButtonModule,
	MdcIconButtonModule,
	MdcElevationModule,
	MdcTabBarModule,
	MdcFabModule,
	MdcRippleModule,
	MdcTextFieldModule,
	MdcLinearProgressModule 
    ],
    exports: [
	// Angular Material
	MatCardModule,
	MatListModule,
	MatIconModule,

	// MDC
	MdcIconModule,
	MdcTopAppBarModule,
	MdcDrawerModule,
	MdcListModule,
	MdcTypographyModule,
	MdcCardModule,
	MdcButtonModule,
	MdcIconButtonModule,
	MdcElevationModule,
	MdcTabBarModule,
	MdcFabModule,
	MdcRippleModule,
	MdcTextFieldModule,
	MdcLinearProgressModule 
    ],
    declarations: []
})
export class MaterialModulesModule { }
