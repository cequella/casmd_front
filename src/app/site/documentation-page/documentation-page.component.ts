import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-documentation-page',
    templateUrl: './documentation-page.component.html',
    styleUrls: ['./documentation-page.component.scss']
})
export class DocumentationPageComponent implements OnInit {

    register: string;
    
    constructor() { }

    ngOnInit() {
    }

    findCard(form: NgForm, event: Event) {
	event.preventDefault();
	console.log(this.register);
    }
}
