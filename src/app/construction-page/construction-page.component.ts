import { Component, OnInit } from '@angular/core';

import { Task, ConstructionTasksRequestService } from '../construction-tasks-request.service';

@Component({
    selector: 'app-construction-page',
    templateUrl: './construction-page.component.html',
    styleUrls: ['./construction-page.component.css']
})
export class ConstructionPageComponent implements OnInit {
    taskList: Task[];

    constructor(private taskRequest: ConstructionTasksRequestService) { }

    ngOnInit() {
	this.taskRequest
	    .getTaskList()
	    .subscribe(list => this.taskList =list);
    }
}
