import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

import { Observable } from 'rxjs';

import { GlobalsService } from '../globals.service';

@Injectable({
    providedIn: 'root'
})
export class StudentCardSearchService {

    constructor(private globals: GlobalsService,
		private http: HttpClient) { }

    searchFor(year: number, mat: string) {
	return this.http.get(`${this.globals.apiurl}card/available/${year}/${mat}`);
    }
}
