import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-new-headline',
    templateUrl: './new-headline.component.html',
    styleUrls: ['./new-headline.component.scss']
})
export class NewHeadlineComponent implements OnInit {
    @Input() content: any;

    constructor() { }

    ngOnInit() {
    }

}
