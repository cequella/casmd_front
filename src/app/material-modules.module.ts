import { NgModule } from '@angular/core';

import { MatCardModule }        from '@angular/material/card';
import { MatListModule }        from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule }      from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

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
    MdcImageListModule,
    MdcFormFieldModule,
    MdcDialogModule,
    MdcMenuModule,
    MdcButtonLabel
} from '@angular-mdc/web';

@NgModule({
    exports: [
	// Angular Material
	MatCardModule,
	MatListModule,
	MatProgressBarModule,
	MatDialogModule,
	MatBottomSheetModule,

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
	MdcImageListModule,
	MdcSnackbarModule,
	MdcFormFieldModule,
	MdcDialogModule,
	MdcMenuModule
    ],
    declarations: []
})
export class MaterialModulesModule { }
