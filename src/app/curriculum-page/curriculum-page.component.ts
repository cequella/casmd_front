import { Component, OnInit } from '@angular/core';

import { Course }            from '../models/Course';
import { Curriculum }        from '../models/Curriculum';
import { CurriculumService } from '../webservice/curriculum.service';

@Component({
    selector: 'app-curriculum-page',
    templateUrl: './curriculum-page.component.html',
    styleUrls: ['./curriculum-page.component.scss']
})
export class CurriculumPageComponent implements OnInit {
    curriculum: Curriculum;

    constructor(private service: CurriculumService) { }

    ngOnInit() {
	this.service
	    .getEpoch("2016.1")
	    .subscribe(curriculum => this.curriculum =curriculum);
    }

}
