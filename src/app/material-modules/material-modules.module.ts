import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import {
    MdcIconModule,
    MdcAppBarModule,
    MdcDrawerModule,
    MdcListModule,
    MdcTypographyModule,
    MdcCardModule,
    MdcButtonModule,
    MdcIconButtonModule,
    MdcElevationModule,
} from '@angular-mdc/web';

@NgModule({
    imports: [
	// Angular Material
	MatCardModule,
	MatListModule,
	MatIconModule,

	// MDC
	MdcIconModule,
	MdcAppBarModule,
	MdcDrawerModule,
	MdcListModule,
	MdcTypographyModule,
	MdcCardModule,
	MdcButtonModule,
	MdcIconButtonModule,
	MdcElevationModule,
    ],
    exports: [
	// Angular Material
	MatCardModule,
	MatListModule,
	MatIconModule,

	// MDC
	MdcIconModule,
	MdcAppBarModule,
	MdcDrawerModule,
	MdcListModule,
	MdcTypographyModule,
	MdcCardModule,
	MdcButtonModule,
	MdcIconButtonModule,
	MdcElevationModule,
    ],
    declarations: []
})
export class MaterialModulesModule { }
