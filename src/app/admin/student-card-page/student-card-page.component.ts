import { Component, OnInit } from '@angular/core';
import { MatBottomSheet,
	 MatBottomSheetRef
       } from '@angular/material';

@Component({
    selector: 'app-student-card-page',
    templateUrl: './student-card-page.component.html',
    styleUrls: ['./student-card-page.component.scss']
})
export class StudentCardPageComponent implements OnInit {
    constructor(private bottomSheet: MatBottomSheet) {}

    ngOnInit() {
    }

    openBottomSheet() {
	this.bottomSheet.open(ActionBottomSheet);
    }
}

@Component({
    selector: 'action-list',
    template: `
<mat-nav-list>

<a mat-list-item (click)="edit($event)">
<span mat-line>Editar</span>
</a>

<a mat-list-item (click)="destroy($event)">
<span mat-line class="delete">Deletar</span>
</a>

</mat-nav-list>`,
    styles: [`
span.delete {
color: red;
}
`]
})
export class ActionBottomSheet {
    constructor(private bottomSheetRef: MatBottomSheetRef<ActionBottomSheet>) {}

    edit() {
	console.log("EDIT");
	this.bottomSheetRef.dismiss();
    }
    destroy() {
	console.log("DESTROY");
	this.bottomSheetRef.dismiss();
    }
}
