import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Task, ConstructionTasksRequestService } from '../construction-tasks-request.service';

@Component({
    selector: 'app-construction-page',
    templateUrl: './construction-page.component.html',
    styleUrls: ['./construction-page.component.css'],
    animations: [
	trigger('detailExpand', [
	    state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
	    state('expanded', style({height: '*'})),
	    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
	]),
    ]
})
export class ConstructionPageComponent implements OnInit {
    dataSource:       Task[];
    expandedElement:  Task;
    columnsToDisplay: string[] =["position", "name", "weight", "symbol"];

    constructor(private taskRequest: ConstructionTasksRequestService) { }

    ngOnInit() {
	this.taskRequest
	    .getTaskList()
	    .subscribe(list => this.dataSource =list);
    }
}
