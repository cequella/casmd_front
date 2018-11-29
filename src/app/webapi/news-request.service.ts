import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { News } from '../models/News';

@Injectable({
    providedIn: 'root'
})
export class NewsRequestService {

    constructor() { }
    
    top(): Observable<News[]> {
	let out: News[] =[
	    {id: 0,
	     admin_id: 1,
	     tag_id: 1,
	     header: "Titulo maroto",
	     headline: "Titulo maroto",
	     content: "blabalablabalablabla",
	     created_at: new Date(),
	     updated_at: new Date()}
	];

	return of(out);
    }
}
