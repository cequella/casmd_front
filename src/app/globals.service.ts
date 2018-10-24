import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalsService {
    public readonly apiurl ="http://localhost/casmdback/public/";
    
    constructor() { }
}
