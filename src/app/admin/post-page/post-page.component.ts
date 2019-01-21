import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'app-post-page',
    templateUrl: './post-page.component.html',
    styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
    public Editor = ClassicEditor;

    public postForm = new FormGroup({
	title: new FormControl('Teste'),
	content: new FormControl('bla')
    });
    
    constructor() { }

    ngOnInit() {
    }

    submit() {
	console.log(this.postForm.value);
    }
}
