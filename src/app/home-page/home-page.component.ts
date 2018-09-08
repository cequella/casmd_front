import { Component, OnInit } from '@angular/core';

import { Notice } from '../models/Notice';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    noticeList: Notice[];
    currentNotice: Notice ={
	id: 0,
	title: "MW19: Começaram as inscrições",
	startDate: new Date("2019-03-15T13:00:00.000Z"),
	description: "Garanta já sua credencial"
    };
    
    constructor() { }

    ngOnInit() {
    }

}
