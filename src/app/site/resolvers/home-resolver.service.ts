import { Injectable } from '@angular/core';
import {
    Resolve,
    Router,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { LARAVEL } from '../../models/LARAVEL';
import { Post }    from '../../models/Post';

import { PostsService } from '../../webapi/posts.service';

@Injectable({
    providedIn: 'root'
})
export class HomeResolverService implements Resolve<LARAVEL<Post[]>> {
    constructor(private service: PostsService,
		private router:  Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LARAVEL<Post[]>>  | Observable<never> {
	return this.service.listTop().pipe(
	    take(1),
	    mergeMap(postList => {
		if(postList){
		    return of(postList);
		} else {
		    return EMPTY;
		}
	    })
	);
    }
}
