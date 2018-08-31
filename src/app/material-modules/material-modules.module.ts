import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
	CommonModule,
	MatCardModule,
	MatListModule,
	MatIconModule
    ],
    exports: [
	MatCardModule,
	MatListModule,
	MatIconModule
    ],
    declarations: []
})
export class MaterialModulesModule { }
