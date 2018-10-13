import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Card } from '../models/Card';

import { GlobalsService } from '../globals.service';

@Injectable({
    providedIn: 'root'
})
export class StudentCardSearchService {

    constructor(private globals: GlobalsService,
		private http: HttpClient) { }

    searchFor(mat: string): Observable<Card[]> {
	return this.http.get<Card[]>(this.globals.apiurl+"card/available/2018/"+mat);
    }
}
