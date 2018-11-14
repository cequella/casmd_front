import { Component,
	 OnInit,
	 AfterViewInit,
	 OnDestroy,
	 ElementRef,
	 HostListener,
	 ViewChild
       } from '@angular/core';

import { MdcSnackbar } from '@angular-mdc/web';

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
    favorited   =false;
    
    constructor(private elementRef: ElementRef,
		private snackbar: MdcSnackbar) { }

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

    favorite() {
	this.favorited =!this.favorited;
	this.showSnackbar();
    }

    private showSnackbar() {
	const snackbarRef = this.snackbar.show("Agora você está acompanhando a vaquinha!!!", "Desfazer", {
	    align:           "center",
	    multiline:       true,
	    dismissOnAction: true,
	    focusAction:     false,
	    actionOnBottom:  true
	});
	
	snackbarRef.afterDismiss().subscribe(() => {
	    console.log('The snack-bar was dismissed');
	});
    }
}
