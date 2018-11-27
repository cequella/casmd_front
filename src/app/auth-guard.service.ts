import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable,
	 BehaviorSubject,
	 of
       } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    private accessAllowed: BehaviorSubject<boolean> =new BehaviorSubject<boolean>(false);

    constructor() { }

    canActivate(): Observable<boolean> {
	return this.accessAllowed.asObservable();
    }
    login(username: string, password: string): Observable<boolean> {
	let allowed =(username=="cequella" && password=="1234");
	if(allowed) this.accessAllowed.next(true);
	return this.canActivate();
    }
    logout() {
	this.accessAllowed.next(false);
    }
}
