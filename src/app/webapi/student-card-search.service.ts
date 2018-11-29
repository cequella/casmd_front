import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';

import { Card } from '../models/Card';

@Injectable({
    providedIn: 'root'
})
export class StudentCardSearchService {

    constructor(private http: HttpClient) { }

    listAll(): Observable<Card[]> {
	let out =[
	    { id: 0, studentMat: 123578, relativeTo:  new Date(), receivedAt:  new Date(), deliveredAt: null },
	    { id: 1, studentMat: 123578, relativeTo:  new Date(), receivedAt:  new Date(), deliveredAt: null },
	    { id: 2, studentMat: 123578, relativeTo:  new Date(), receivedAt:  new Date(), deliveredAt: new Date() }
	];

	return of(out);
    }
    searchFor(year: number, mat: string): Observable<Card> {
	return this.http.get<Card>(`${environment.api}/card/available/${year}/${mat}`);
    }
}
