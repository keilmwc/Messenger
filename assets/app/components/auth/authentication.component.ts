/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Component } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
@Component({
    selector: 'app-authentication',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signup']">SignUp</a></li>
                    <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">SignIn</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">LogOut</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `
})

export class AuthenticationComponent{
    constructor(private authenticationService: AuthenticationService){}

    isLoggedIn(){
        return this.authenticationService.isLoggedIn();
    }
}