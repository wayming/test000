import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SVG } from '../models';

@Injectable()
export class RestService {
    constructor(private http: Http) {}

    getAllSVGs() {
        return this.http.get('api/svgs')
                .map((response) => {
                    const json = response.json();

                    if (response.ok) {
                        return json.data as SVG[];
                    } else {
                        return this.logError(json.data);
                    }
                });
    }

    private logError(error: any) {
        try {
            error = error.json();
            console.error(error.error);
        } catch(e) {
            // ...ignore
            console.error(error);
        }

        return Observable.throw(error);
    }
}