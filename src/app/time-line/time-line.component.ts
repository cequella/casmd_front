import { Component, OnInit } from '@angular/core';

import { MdcTabActivatedEvent } from '@angular-mdc/web';

@Component({
    selector: 'app-timeline',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
    tabList =["Recentes", "#Mediaweek", "#Eleicao", "#Curso"];
    temp =[
	{hashtag:"mediaweek",
	 title: "Titulo maroto",
	 subtitle: "Testando muito!"},
	{hashtag:"mediaweek",
	 title: "Titulo maroto",
	 subtitle: "Testando muito!"},
	{hashtag:"mediaweek",
	 title: "Titulo maroto",
	 subtitle: "Testando muito!"},
	{hashtag:"mediaweek",
	 title: "Titulo maroto",
	 subtitle: "Testando muito!"},
	{hashtag:"mediaweek",
	 title: "Titulo maroto",
	 subtitle: "Testando muito!"}
    ];
    lastTab: number;

    constructor() { }

    ngOnInit() {
    }

    logTab(event: MdcTabActivatedEvent): void {
	this.lastTab = event.index;
    }

}
