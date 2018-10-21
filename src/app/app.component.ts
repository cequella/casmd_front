import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    menu  =[
	{label: "Home",              icon: "home",        href: ""},
	{label: "Documentos",        icon: "description", href: ""},
	{label: "Sobre a gestão",    icon: "info",        href: "/sobre"}
    ];
}
