import { Inject, Injectable } from '@angular/core';

import { LOCAL_STORAGE,
	 WebStorageService
       } from 'angular-webstorage-service';

@Injectable()
export class LocalStorage {
    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService){}

    /*
      Create a available keys dictionary
     */
    set(key: string, value: any) {
	this.storage.set(key, value);
    }
    get(key: string): any {
	return this.storage.get(key);
    }
    drop(key: string): any {
	this.storage.remove(key)
    }
}
