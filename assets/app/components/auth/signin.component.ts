/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {User} from "../../models/user.model";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit{
    constructor(private authenticationService: AuthenticationService, private router: Router){}
   myForm: FormGroup;
    onSubmit(){
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authenticationService.signIn(user).subscribe(
            data => {
                // Store token on browser
                localStorage.setItem('token', data.token);
                localStorage.setItem('userID', data.userId)
                this.router.navigateByUrl('/');
            },
            error => console.log(error)
        );
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"),
                Validators.required]),
            password: new FormControl(null, Validators.required)
        })
    }
}