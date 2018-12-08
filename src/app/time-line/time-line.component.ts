import { Component,
	 OnInit,
	 Input,
	 Output,
	 EventEmitter
       } from '@angular/core';

import { MdcTabActivatedEvent } from '@angular-mdc/web';

import { Post } from '../models/Post';

@Component({
    selector: 'app-timeline',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
    @Input("content")    fullPostList: Post[];
    @Output("postClick") postClick =new EventEmitter();

    tabList:         string[] =["Principais"];
    currentPostList: Post[];

    constructor() { }

    ngOnInit(){
	for(let post of this.fullPostList) {
	    let tag =post.tag.name;
	    if(this.tabList.indexOf(name)<0) this.tabList.push(`#${tag}`);
	}
	this.currentPostList =this.fullPostList;
    }

    changeContent(event: MdcTabActivatedEvent) {
	if(event.index ==0){
	    // Full content
	    this.currentPostList =this.fullPostList;
	} else {
	    // Filter content by tag
	    let hashtag =event.tab.label.substr(1); //Remove the # sign
	    this.currentPostList =this.fullPostList.filter((el, i, a) => el.tag.name==hashtag);
	}
    }
    postSelection(post: any) {
	this.postClick.emit(post);
    }
}
