import { Component,
	 OnInit,
	 AfterViewInit,
	 OnDestroy,
	 ElementRef,
	 HostListener,
	 ViewChild
       } from '@angular/core';
import { MdcSnackbar } from '@angular-mdc/web';

import { Chart } from 'chart.js';

@Component({
    selector: 'app-crowdfunding-details-page',
    templateUrl: './crowdfunding-details-page.component.html',
    styleUrls: ['./crowdfunding-details-page.component.scss']
})
export class CrowdfundingDetailsPageComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild("topFab")    topFab:    any;
    @ViewChild("bottomFab") bottomFab: any;
    @ViewChild("progress")  progress:  ElementRef;
    
    topHided      =false;
    bottomHided   =true;
    favorited     =false;
    progressChart =Chart;
    
    constructor(private elementRef: ElementRef,
		private snackbar: MdcSnackbar) { }

    ngOnInit() {
	this.topFab.exited    =false;
	this.bottomFab.exited =true;
    }
    ngAfterViewInit() {
	this.elementRef.nativeElement.ownerDocument.body.style.margin ="0px";
	this.temp()
	this.makeChart();
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
	//this.showSnackbar();
    }

    private showSnackbar() {
	/*
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
	*/
    }
    private makeChart() {
	let context =this.progress.nativeElement.getContext("2d");
        this.progressChart =new Chart(context, {
            type: 'line',
            data: {
                labels: ["9/11", "10/11", "11/11", "12/11", "13/11", "14/11"],
                datasets: [{
                    label: '# of Votes',
                    data: [2, 3, 4, 5, 12, 14],
                    backgroundColor: 'rgba(0, 229, 149, 0.2)',
		    borderColor: 'rgb(0, 229, 149)',
                    borderWidth: 1
                }]
            },
            options: {
		lineAt: 20,
		title: {
		    display: true,
		    text: 'Arrecadação'
		},
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
			    max: 25
                        },
                    }]
                },
            }
        });
    }
    private temp() {
	Chart.pluginService.register({
	    afterDraw: function(chart) {
		if (typeof chart.config.options.lineAt != 'undefined') {
        	    var lineAt = chart.config.options.lineAt;
		    var ctxPlugin = chart.chart.ctx;
		    var xAxe = chart.scales[chart.config.options.scales.xAxes[0].id];
		    var yAxe = chart.scales[chart.config.options.scales.yAxes[0].id];
           	    
		    // I'm not good at maths
		    // So I couldn't find a way to make it work ...
		    // ... without having the `min` property set to 0
		    if(yAxe.min != 0) return;
		    
		    ctxPlugin.strokeStyle = "red";
        	    ctxPlugin.beginPath();
		    lineAt = (lineAt - yAxe.min) * (100 / yAxe.max);
		    lineAt = (100 - lineAt) / 100 * (yAxe.height) + yAxe.top;
		    ctxPlugin.moveTo(xAxe.left, lineAt);
		    ctxPlugin.lineTo(xAxe.right, lineAt);
		    ctxPlugin.stroke();
		}
	    }
	});
    }
}
