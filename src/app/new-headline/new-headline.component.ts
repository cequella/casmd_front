import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../models/Post';

@Component({
    selector: 'app-new-headline',
    templateUrl: './new-headline.component.html',
    styleUrls: ['./new-headline.component.scss']
})
export class NewHeadlineComponent implements OnInit {
    @Input() content: Post;

    constructor() { }

    ngOnInit() {
    }
}
