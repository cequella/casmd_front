import { Component,
	 OnInit,
	 AfterViewInit,
	 OnDestroy,
	 ElementRef,
	 HostListener,
	 ViewChild
       } from '@angular/core';

@Component({
    selector: 'app-crowdfunding-item',
    templateUrl: './crowdfunding-item.component.html',
    styleUrls: ['./crowdfunding-item.component.scss']
})
export class CrowdfundingItemComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild("topFab")    topFab:    any;
    @ViewChild("bottomFab") bottomFab: any;

    topHided    =false;
    bottomHided =true;
    
    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
	this.topFab.exited    =false;
	this.bottomFab.exited =true;
    }
    ngAfterViewInit() {
	this.elementRef.nativeElement.ownerDocument.body.style.margin ="0px";
    }
    ngOnDestroy() {
	this.elementRef.nativeElement.ownerDocument.body.style.margin ="8px";
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
	if(this.topFab) {
	    let top =this.topFab.elementRef.nativeElement.getBoundingClientRect().top;

	    if(top<36 && !this.topHided) {
		this.topHided =true;
		this.topFab.exited =true;
		this.bottomFab.exited =false;
	    } else if(top>36 && this.topHided) {
		this.topHided =false;
		this.topFab.exited =false;
		this.bottomFab.exited =true;
	    } 
	}
    }

    private 
}
