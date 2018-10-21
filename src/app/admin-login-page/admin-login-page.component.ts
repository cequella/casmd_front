import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-admin-login-page',
    templateUrl: './admin-login-page.component.html',
    styleUrls: ['./admin-login-page.component.scss']
})
export class AdminLoginPageComponent implements OnInit {
    loginForm = new FormGroup(
	{
	    username: new FormControl(
		{value: '', disabled: false},
		[Validators.required]),
	    password: new FormControl(
		{value: '', disabled: false},
		[Validators.required])
	}
    );

    constructor() { }

    ngOnInit() {
    }

    submitForm() {
	console.log(this.loginForm);
    }
}
