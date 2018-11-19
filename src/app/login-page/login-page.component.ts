import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthGuardService } from '../auth-guard.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    loginForm = new FormGroup({
	username: new FormControl(
	    { value: '', disabled: false },
	    [Validators.required]
	),
	password: new FormControl(
	    { value: '', disabled: false },
	    [Validators.required]
	),
    });

    constructor(private auth: AuthGuardService) { }

    ngOnInit() {
    }

    validate() {
	let form =this.loginForm.value;
	this.auth.validate(form.username, form.password);
    }
}
