/**
 * Created by KeilCarpenter on 12-Jul-17.
 */

import {Http, Headers, Response} from "@angular/http";
import {User} from "../../models/user.model";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService{
    constructor(private http: Http){}

    signUp(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type' : 'application/json'});

        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}