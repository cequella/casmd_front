import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StudentCardSearchService {

    constructor(private http: HttpClient) { }

    searchFor(year: number, mat: string) {
	return this.http.get(`${environment.api}/card/available/${year}/${mat}`);
    }
}
