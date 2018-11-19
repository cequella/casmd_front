import { Injectable }  from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    private accessAllowed: boolean =true;

    constructor() { }

    canActivate(): boolean {
	return this.accessAllowed;
    }

    change() {
	this.accessAllowed =!this.accessAllowed;
    }
}
