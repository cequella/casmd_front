import { Injectable } from '@angular/core';
import { Router,
	 CanActivate
       } from '@angular/router';
import { Observable,
	 of
       } from 'rxjs';
import { LocalStorage } from './local-storage';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    private readonly ACCESS_KEY ="access-allowed";
    private readonly USER_KEY   ="user";

    constructor(private router: Router,
		private local:  LocalStorage) { }

    canActivate(): Observable<boolean> {
	let accessAllowed =this.local.get(this.ACCESS_KEY);

	if(!accessAllowed){
	    this.router.navigate(['/login']);
	}
	return of(accessAllowed);
    }
    login(username: string, password: string): Observable<boolean> {
	if(username=='cequella' && password=='123') {
	    this.local.set(this.ACCESS_KEY, true);
	    this.local.set(this.USER_KEY, username);
	}
	return this.canActivate();
    }
    logout() {
	this.local.drop(this.ACCESS_KEY);
	this.local.drop(this.USER_KEY);
    }
}
