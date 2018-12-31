import { Component,
	 OnInit
       } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../models/Post';

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
    root: string ="Notícias";
    news: Post;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
	let resolve =this.route.snapshot.data;
	this.news =resolve.post.data;

	console.log(this.news);
    }
}
