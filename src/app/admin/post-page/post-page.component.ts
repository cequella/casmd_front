import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'app-post-page',
    templateUrl: './post-page.component.html',
    styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
    public editor = ClassicEditor;

    constructor() { }

    ngOnInit() {
    }

    onInput(value: any): void {
	console.log(value);
    }

    onChange(value: any): void {
	console.log(value);
    }
}
