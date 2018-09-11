import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WebService {
    
    constructor() { }

    build(path: string, ...args: any[]): string {
	let address ="http://127.0.0.1:8887/";
	return (address +path);
    }
}
