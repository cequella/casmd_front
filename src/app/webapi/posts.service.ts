import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

import { LARAVEL } from '../models/LARAVEL';
import { Post }    from '../models/Post';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private readonly endpoint: string =`${environment.api}/post`;

    constructor(private http: HttpClient) { }

    listTop(): Observable<LARAVEL<Post[]>> {
	return this.http.get<LARAVEL<Post[]>>(this.endpoint);
    }
    post(id: string): Observable<LARAVEL<Post>> {
	return this.http.get<LARAVEL<Post>>(`${this.endpoint}/${id}`);
    }
}
