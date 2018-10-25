import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    menu  =[
	{icon: "home",        label: "Home",       href: ""},
	{icon: "description", label: "Documentos", href: "/documentos"}
    ];
}
