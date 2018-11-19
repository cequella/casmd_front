import { Injectable }  from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    private accessAllowed: boolean =false;

    constructor() { }

    canActivate(): boolean {
	return this.accessAllowed;
    }

    validate(username: string, password: string) {
	this.accessAllowed =(username=="cequella" && password=="1234");
    }
}
