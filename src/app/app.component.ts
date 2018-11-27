import { Component,
	 ViewChild,
	 OnInit
       } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthGuardService} from './auth-guard.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    logged: Observable<boolean>;

    userMenu  =[
	{icon: "home",        label: "Home",       href: ""},
	{icon: "description", label: "Documentos", href: "/documentos"},
	{icon: "trending_up", label: "Vaquinhas",  href: "/vaquinhas"}
    ];
    adminMenu =[
    ];
    menu: any[];

    constructor(private router: Router,
		private auth:   AuthGuardService) {}

    ngOnInit() {
	this.logged =this.auth.canActivate();
    }
    logout() {
	this.auth.logout();
	this.router.navigate(['']);
    }
}
