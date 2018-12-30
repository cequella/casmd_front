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

    tabList:  string[] =["Principais"];
    postList: Post[];

    postMap: Map<string, Post[]> =new Map();

    constructor() { }

    ngOnInit(){
	// Start with the full post list
	this.postList =this.fullPostList;

	// Map tags
	for(let post of this.fullPostList) {
	    let tag =post.tag.name;
	    // Map
	    if(this.postMap.has(tag)){
		let postsFromTag =this.postMap.get(tag);
		postsFromTag.push(post);
		this.postMap.set(tag, postsFromTag);
	    } else {
		this.postMap.set(tag, [post]);
		this.tabList.push(`#${tag}`);
	    }
	}
    }

    changeContent(event: MdcTabActivatedEvent) {
	if(event.index ==0){
	    // Full content
	    this.postList =this.fullPostList;
	} else {
	    // Filter content by tag
	    let tag =event.tab.label.substr(1); //Remove the # sign
	    this.postList =this.postMap.get(tag);
	}
    }
    postSelection(post: any) {
	this.postClick.emit(post);
    }
}
