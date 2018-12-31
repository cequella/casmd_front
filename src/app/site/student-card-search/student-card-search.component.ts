import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval } from 'rxjs';
import { MdcSnackbar } from '@angular-mdc/web';
import { HttpErrorResponse } from '@angular/common/http';

import { StudentCardSearchService } from '../../webapi/student-card-search.service';

import { Card } from '../../models/Card';

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
	
	let finder =this.card.searchFor("2018", this.register);
	let subscriber =finder.subscribe(
	    (result: any) => {
		this.setResult(result.data);
		subscriber.unsubscribe();
	    },
	    (err: HttpErrorResponse) => {
		this.setResult(null)
		subscriber.unsubscribe();
	    }
	);
    }
    cancel() {
	this.gotoSearch();
    }
    schedule(date: string, time: string) {
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
