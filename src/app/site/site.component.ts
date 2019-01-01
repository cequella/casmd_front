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
    menu  =[
	{icon: "home",        label: "Home",       href: ""},
	{icon: "description", label: "Documentos", href: "/documentos"},
	{icon: "trending_up", label: "Vaquinhas",  href: "/vaquinhas"}
    ];

    constructor(private router: Router) {}

    ngOnInit() {
    }
}
