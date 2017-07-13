/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from "./authentication.service";
import { User } from "../../models/user.model";

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor(private authenticationService: AuthenticationService) {
    }

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        this.authenticationService.signUp(user).subscribe(
            data => console.log(data),
            error => console.log(error)
        );
        this.myForm.reset();
    }

    isLoggedIn(){
        return localStorage.getItem('token');
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        })
    }
}
