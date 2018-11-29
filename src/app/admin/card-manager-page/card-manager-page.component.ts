import { Component,
	 OnInit
       } from '@angular/core';
import { FormGroup,
	 FormControl,
	 Validators
       } from '@angular/forms';

import { Card } from '../../models/Card';

import { StudentCardSearchService } from '../../webapi/student-card-search.service';

@Component({
    selector: 'app-card-manager-page',
    templateUrl: './card-manager-page.component.html',
    styleUrls: ['./card-manager-page.component.scss']
})
export class CardManagerPageComponent implements OnInit {
    cardList: Card[] =[];

    newCardForm =new FormGroup({
	matControl: new FormControl(
	    { value: '', disabled: false },
	    [Validators.required]),
	nameControl: new FormControl(
	    { value: '', disabled: false },
	    [Validators.required])
    });
    
    constructor(private card: StudentCardSearchService) { }

    ngOnInit() {
	let temp =this.card.listAll().subscribe(
	    content => {
		this.cardList =content;
		//temp.unsubscribe();
	    }
	);
    }

    newCardReg() {
	let t =this.newCardForm.value;

	let newCard =new Card();
	newCard.studentMat= t.matControl;
	newCard.relativeTo= new Date();
	newCard.receivedAt= new Date();
	
	this.cardList.push(
	    new Card()
	);
    }
    closeCardReg(cardReg: any) {
	cardReg.deliveredAt =new Date();
    }
}
