import { Component,
	 OnInit
       } from '@angular/core';
import { Router,
	 ActivatedRoute
       } from '@angular/router';

import { Observable } from 'rxjs';
import { filter }     from 'rxjs/operators';

import { Post } from '../../models/Post';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    posts: Post[];

    constructor(private router: Router,
		private route:  ActivatedRoute) {}

    ngOnInit() {
	let resolver =this.route.snapshot.data;
	this.posts =resolver.postlist.data;
    }

    openPost(post: Post) {
	this.router.navigate(['/noticia', post.id]);
    }
}
