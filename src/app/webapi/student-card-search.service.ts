import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Card } from "../models/Card";

@Injectable({
    providedIn: 'root'
})
export class StudentCardSearchService {

    constructor(private http: HttpClient) { }

    searchFor(mat: string): Observable<Card[]> {
	let params = new HttpParams().set('mat', mat);
	return this.http.get<Card[]>("http://localhost/casmd/index.php", {params: params});
    }
}
