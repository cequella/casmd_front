import { Component, ViewChild, OnInit } from '@angular/core';

import { AuthGuardService} from './auth-guard.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    userMenu  =[
	{icon: "home",        label: "Home",       href: ""},
	{icon: "description", label: "Documentos", href: "/documentos"},
	{icon: "trending_up", label: "Vaquinhas",  href: "/vaquinhas"}
    ];
    adminMenu =[
	{icon: "exit_to_app", label: "Sair", href: ""},
    ];
    menu: any[];

    constructor(private auth: AuthGuardService) {}

    ngOnInit() {
	this.menu =(this.auth.canActivate())? this.adminMenu : this.userMenu;
    }
}
