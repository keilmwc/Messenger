import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./components/app/app.component";
import {MessageService} from "./components/messages/message.service";
import {AuthenticationComponent} from "./components/auth/authentication.component";
import {routing} from "./components/app/app.routing";
import {HeaderComponent} from "./components/app/header.component";
import {AuthenticationService} from "./components/auth/authentication.service";
import {ErrorComponent} from "./components/errors/error.component";
import {ErrorService} from "./components/errors/error.service";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageComponent} from "./components/messages/message.component";
import {MessagesComponent} from "./components/messages/messages.component";
import {MessageListComponent} from "./components/messages/message-list.component";
import {MessageInputComponent} from "./components/messages/message-input.component";
import {SigninComponent} from "./components/auth/signin.component";
import {SignupComponent} from "./components/auth/signup.component";
import {LogoutComponent} from "./components/auth/logout.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        AuthenticationComponent,
        HeaderComponent,
        MessageComponent,
        MessagesComponent,
        MessageListComponent,
        MessageInputComponent,
        SigninComponent,
        SignupComponent,
        LogoutComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpModule,
        CommonModule,
        ReactiveFormsModule,


        routing
    ],
    providers: [
        ErrorService,
        MessageService,
        AuthenticationService

    ],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule {

}