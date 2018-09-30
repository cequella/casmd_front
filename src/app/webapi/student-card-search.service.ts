import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StudentCardSearchService {

    constructor() { }

    bla(): Observable<any> {
	return of({
	    state: true
	});
    }
}
