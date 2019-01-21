import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { LocalStorage }     from '../local-storage';
import { AuthGuardService } from '../auth-guard.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    user: any;

    menu  =[
	{ icon: "dashboard",     label: "Dashboard",    href: "/admin" },
	{ icon: "library_books", label: "Postagens",    href: "/admin/news" },
	{ icon: "payment",       label: "Carteirinhas", href: "/admin/cards" },
	{ icon: "trending_up",   label: "Vaquinhas",    href: "/admin" }
    ];

    constructor(private router: Router,
		private auth:   AuthGuardService,
		private local:  LocalStorage) {
	this.user =this.auth.data();
    }

    ngOnInit() {
    }

    logout() {
	this.auth.logout();
	this.router.navigate(['/login']);
    }
}
