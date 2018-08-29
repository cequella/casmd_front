import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

// --------------------------------------------------------------------------------
export interface Task {
    position:    number;
    name:        string;
    weight:      number;
    symbol:      string;
    description: string;
}
// --------------------------------------------------------------------------------

@Injectable({
    providedIn: 'root'
})
export class ConstructionTasksRequestService {

    constructor(private http: HttpClient) { }

    getTaskList(): Observable<Task[]> {
	let path ="./assets/constructionTasks.json";
	return this.http.get<Task[]>(path);;
    }
}
