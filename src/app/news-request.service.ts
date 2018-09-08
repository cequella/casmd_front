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
	     hashtag:"MediaWeek",
	     headline: "Titulo maroto",
	     promo: "Testando muito!",
	     content: null,
	     createdAt: new Date()},
	    {id: 1,
	     hashtag:"MediaWeek",
	     headline: "Titulo maroto",
	     promo: "Testando muito!",
	     content: null,
	     createdAt: new Date()},
	    {id: 2,
	     hashtag:"Eleicao",
	     headline: "Titulo maroto",
	     promo: "Testando muito!",
	     content: null,
	     createdAt: new Date()},
	    {id: 3,
	     hashtag:"SemanaZero",
	     headline: "Titulo maroto",
	     promo: "Testando muito!",
	     content: null,
	     createdAt: new Date()},
	    {id: 4,
	     hashtag:"Eleicao",
	     headline: "Titulo maroto",
	     promo: "Testando muito!",
	     content: null,
	     createdAt: new Date()},
	];

	return of(out);
    }
}
