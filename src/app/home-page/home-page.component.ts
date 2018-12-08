import { Component,
	 OnInit,
       } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../models/Post';

import { PostsService } from '../webapi/posts.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    posts: Post[];
    
    constructor(private router: Router,
		private postsService: PostsService) { }

    ngOnInit() {
	let post_S =this.postsService.listTop().subscribe(
	    content => {
		this.posts =content.data;
		post_S.unsubscribe();
	    },
	    error => {
		post_S.unsubscribe();
	    }
	);
    }
    openPost(post: Post) {
	this.router.navigate(['/noticia', post.id]);
    }
}
