import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

// --------------------------------------------------------------------------------
export interface Task {
    label:       string;
    done:        boolean;
    description: string;
}
// --------------------------------------------------------------------------------

@Injectable({
    providedIn: 'root'
})
export class ConstructionTasksRequestService {

    constructor(private http: HttpClient) { }

    getTaskList(): Observable<Task[]> {
	let path ="http://localhost:8000/api/taskList/?format=json";
	return this.http.get<Task[]>(path);
    }
}
