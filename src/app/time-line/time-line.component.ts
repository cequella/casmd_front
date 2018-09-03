import { Component, OnInit } from '@angular/core';

import { MdcTabActivatedEvent } from '@angular-mdc/web';

import { News } from '../models/News';
import { NewsRequestService } from '../news-request.service';

@Component({
    selector: 'app-timeline',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
    tabList =["Recentes", "#Mediaweek", "#Eleicao", "#Curso"];
    newsList: News[];
    lastTab: News;

    constructor(private newsRequest: NewsRequestService) { }

    ngOnInit() {
	this.newsRequest
	    .top()
	    .subscribe(list => this.newsList =list);
    }

    logTab(event: MdcTabActivatedEvent): void {
	this.lastTab = this.newsList[event.index];
    }

}
