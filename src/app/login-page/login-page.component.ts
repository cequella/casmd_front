import { Component,
	 OnInit
       } from '@angular/core';
import { FormControl,
	 FormGroup,
	 Validators
       } from '@angular/forms';
import { Router }    from '@angular/router';
import { MdcDialog,
	 MdcDialogRef
       } from '@angular-mdc/web';

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

    constructor(private router: Router,
		private auth:   AuthGuardService,
		private dialog: MdcDialog) { }

    ngOnInit() {
    }

    validate() {
	let form =this.loginForm.value;
	let subscriber =this.auth.login(form.username, form.password).subscribe(allowed => {
	    if(allowed) {
		this.gotoDashboard()
	    } else {
		this.openAlert();
	    }
	});
    }

    private openAlert() {
	this.dialog.open(WrongPasswordAlertDialog);
    }
    private gotoDashboard() {
	this.router.navigate(["/admin"]);
    }
}

@Component({
    template: `
<mdc-dialog>
<mdc-dialog-container>
<mdc-dialog-surface>
<mdc-dialog-title>Usuário ou senha inválidos</mdc-dialog-title>
<mdc-dialog-actions>
<button mdcDialogButton mdcDialogAction="close">Ok</button>
</mdc-dialog-actions>
</mdc-dialog-surface>
</mdc-dialog-container>
</mdc-dialog>
`,
})
export class WrongPasswordAlertDialog {
    constructor(public dialogRef: MdcDialogRef<WrongPasswordAlertDialog>) { }
}
