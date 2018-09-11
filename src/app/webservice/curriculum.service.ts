import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Course }     from '../models/Course';
import { Curriculum } from '../models/Curriculum';

@Injectable({
    providedIn: 'root'
})
export class CurriculumService {

    constructor(private http: HttpClient) { }

    getEpoch(epoch: string): Observable<Curriculum> {
	return this.http.get<Curriculum>("http://127.0.0.1:8887/Curriculum.json");
    }
}
