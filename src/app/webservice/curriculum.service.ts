import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Course }     from '../models/Course';
import { Curriculum } from '../models/Curriculum';
import { WebService } from '../web.service';

@Injectable({
    providedIn: 'root'
})
export class CurriculumService {

    constructor(private http: HttpClient, private web: WebService) { }

    getEpoch(epoch: string): Observable<Curriculum> {
	return this.http.get<Curriculum>(this.web.build("Curriculum.json"));
    }
}
