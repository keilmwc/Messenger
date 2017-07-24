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
import {MessageModule} from "./components/messages/messages.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        AuthenticationComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        MessageModule,
        RouterModule,
        HttpModule,
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