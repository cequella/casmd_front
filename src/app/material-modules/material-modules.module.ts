import { NgModule } from '@angular/core';

import { MatCardModule }        from '@angular/material/card';
import { MatListModule }        from '@angular/material/list';
import { MatIconModule }        from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule }      from '@angular/material/dialog';

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
    MdcLinearProgressModule,
    MdcSnackbarModule,
    MdcImageListModule 
} from '@angular-mdc/web';

@NgModule({
    exports: [
	// Angular Material
	MatCardModule,
	MatListModule,
	MatIconModule,
	MatProgressBarModule,
	MatDialogModule,

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
	MdcLinearProgressModule,
	MdcSnackbarModule,
	MdcImageListModule
    ],
    declarations: []
})
export class MaterialModulesModule { }
