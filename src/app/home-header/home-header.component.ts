import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
    @Input() title:       string;
    @Input() subtitle:    string;
    @Input() description: string;

    constructor() { }

    ngOnInit() {
    }

}
