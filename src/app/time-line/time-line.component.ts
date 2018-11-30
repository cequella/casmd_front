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
    tabList:     string[];
    newsList:    News[];
    currentList: News[];
    lastTab:     News;

    constructor(private newsRequest: NewsRequestService) { }

    ngOnInit() {
	this.newsRequest
	    .top()
	    .subscribe(list => {
		this.newsList    =list;
		this.currentList =list;

		this.tabList =["Recentes"];
		for(let item of list) this.tabList.push("#"+item.hashtag);
		
		// Remove double
		this.tabList =this.tabList.filter((el, i, a) => i === a.indexOf(el))
	    });
    }

    changeContent(event: MdcTabActivatedEvent) {
	if(event.index ==0){
	    // Full content
	    this.currentList =this.newsList;
	} else {
	    // Filter content by tag
	    let hashtag =event.tab.label.substr(1); //Remove the # sign
	    this.currentList =this.newsList.filter((el, i, a) => el.hashtag==hashtag);
	}
    }

}
