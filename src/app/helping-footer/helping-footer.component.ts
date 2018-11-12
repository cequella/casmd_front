import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-helping-footer',
    templateUrl: './helping-footer.component.html',
    styleUrls: ['./helping-footer.component.scss']
})
export class HelpingFooterComponent implements OnInit {
    @Input("subject") subject: string;

    constructor() { }

    ngOnInit() {
    }
    
    sendMail(){
	window.location.href =`mailto:casmd@virtual.ufc.br?subject=${this.subject}`;
    }
    openFacebookPage(){
	window.location.href ="https://www.facebook.com/CASMDUFC/";
    }
}
