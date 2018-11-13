import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-crowdfunding-page',
    templateUrl: './crowdfunding-page.component.html',
    styleUrls: ['./crowdfunding-page.component.scss']
})
export class CrowdfundingPageComponent implements OnInit {
    masonryImages = [
	{ image: 'https://material-components-web.appspot.com/images/photos/3x2/16.jpg', label:"Vaquinha 1"  },
	{ image: 'https://material-components-web.appspot.com/images/photos/2x3/1.jpg',  label:"Vaquinha 2"  },
	{ image: 'https://material-components-web.appspot.com/images/photos/3x2/1.jpg',  label:"Vaquinha 3"  },
	{ image: 'https://material-components-web.appspot.com/images/photos/2x3/2.jpg',  label:"Vaquinha 4"  },
	{ image: 'https://material-components-web.appspot.com/images/photos/2x3/3.jpg',  label:"Vaquinha 5"  },
	{ image: 'https://material-components-web.appspot.com/images/photos/3x2/2.jpg',  label:"Vaquinha 6"  },
	{ image: 'https://material-components-web.appspot.com/images/photos/2x3/4.jpg',  label:"Vaquinha 7"  },
	{ image: 'https://material-components-web.appspot.com/images/photos/3x2/3.jpg',  label:"Vaquinha 8"  },
	{ image: 'https://material-components-web.appspot.com/images/photos/2x3/5.jpg',  label:"Vaquinha 9"  },
	{ image: 'https://material-components-web.appspot.com/images/photos/3x2/4.jpg',  label:"Vaquinha 10" },
	{ image: 'https://material-components-web.appspot.com/images/photos/2x3/6.jpg',  label:"Vaquinha 11" },
	{ image: 'https://material-components-web.appspot.com/images/photos/3x2/5.jpg',  label:"Vaquinha 12" },
	{ image: 'https://material-components-web.appspot.com/images/photos/2x3/7.jpg',  label:"Vaquinha 13" },
	{ image: 'https://material-components-web.appspot.com/images/photos/3x2/6.jpg',  label:"Vaquinha 14" },
	{ image: 'https://material-components-web.appspot.com/images/photos/3x2/7.jpg',  label:"Vaquinha 15" }
    ];
    constructor() { }

    ngOnInit() {
    }
}
