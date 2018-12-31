import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,
	 FormBuilder,
	 Validators
       } from '@angular/forms';

import { AuthGuardService } from '../../auth-guard.service';
import { LocalStorage }     from '../../local-storage';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    form: FormGroup;

    constructor(private fb:     FormBuilder, 
                private auth:   AuthGuardService, 
                private router: Router,
		private local:  LocalStorage) {
	
	this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

    ngOnInit() {
	this.local.drop("TESTE");
    }

    login() {
        let val = this.form.value;

        if (val.email && val.password) {
            let authentication =this.auth.login(val.email, val.password);
	    let subscriber =authentication.subscribe(
                allowed => {
		    if(allowed) this.router.navigateByUrl('/admin');
                }
            );
        }
    }
}
