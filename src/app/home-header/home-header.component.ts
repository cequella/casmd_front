import { Component, OnInit, Input } from '@angular/core';

import { Notice } from '../models/Notice';

@Component({
    selector: 'app-home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
    @Input() content: Notice;

    constructor() { }

    ngOnInit() {
    }

}
