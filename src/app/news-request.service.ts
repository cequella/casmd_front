import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { News } from './models/News';

@Injectable({
    providedIn: 'root'
})
export class NewsRequestService {

    constructor() { }
    
    top(): Observable<News[]> {
	let out: News[] =[
	    {id: 0,
	     hashtag:"mediaweek",
	     headline: "Titulo maroto",
	     promo: "Testando muito!",
	     content: null},
	    {id: 1,
	     hashtag:"mediaweek",
	     headline: "Titulo maroto",
	     promo: "Testando muito!",
	     content: null},
	    {id: 2,
	     hashtag:"mediaweek",
	     headline: "Titulo maroto",
	     promo: "Testando muito!",
	     content: null},
	    {id: 3,
	     hashtag:"mediaweek",
	     headline: "Titulo maroto",
	     promo: "Testando muito!",
	     content: null},
	    {id: 4,
	     hashtag:"mediaweek",
	     headline: "Titulo maroto",
	     promo: "Testando muito!",
	     content: null},
	];

	return of(out);
    }
}
