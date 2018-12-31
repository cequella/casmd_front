import { Component,
	 ViewChild,
	 OnInit
       } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthGuardService} from '../auth-guard.service';

@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
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
