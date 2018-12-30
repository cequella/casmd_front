import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval } from 'rxjs';
import { MdcSnackbar } from '@angular-mdc/web';
import { HttpErrorResponse } from '@angular/common/http';

import { LoadingComponent }         from '../loading/loading.component';
import { StudentCardSearchService } from '../webapi/student-card-search.service';

import { Card } from '../models/Card';

@Component({
    selector: 'app-student-card-search',
    templateUrl: './student-card-search.component.html',
    styleUrls: ['./student-card-search.component.scss']
})
export class StudentCardSearchComponent implements OnInit {
    state:    number =1;
    scResult: any ={result: false};
    register: string;

    constructor(private snackbar: MdcSnackbar,
		private card:     StudentCardSearchService) { }

    ngOnInit() {
    }

    findCard(form: NgForm, event: any) {
	this.gotoLoading();
	
	this.card
	    .searchFor("2018", this.register)
	    .subscribe(
		(result: any) => this.setResult(result.data),
		(err: HttpErrorResponse) => this.setResult(null)
	    );
    }
    cancel() {
	this.gotoSearch();
    }
    schedule(date: string, time: string) {
	console.log(date);
	console.log(time);

	/*
	const snackbarRef = this.snackbar.show("bla", "Fechar", {
	    align: "center",
	    dismissOnAction: false
	    //focusAction: this.focusAction,
	    //actionOnBottom: this.actionOnBottom,
	});

	snackbarRef.afterDismiss().subscribe(() => {
	    console.log("Test");
	});
	*/
	
	this.gotoSearch();
    }

    private gotoSearch(){
	this.state =1;
	this.register ="";
    }
    private gotoLoading(){
	this.state =2;
    }
    private gotoResult(){
	this.state =3;
    }
    private setResult(data: Card) {
	this.scResult =data
	this.gotoResult();
    }
}
