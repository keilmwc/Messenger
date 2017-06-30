import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from "./components/app/app.component";
import { MessageComponent } from "./components/messages/message.component";
import { MessageListComponent } from "./components/messages/message-list.component";
import { MessageInputComponent } from "./components/messages/message-input.component";
import {MessageService} from "./components/messages/message.service";
import {MessagesComponent} from "./components/messages/messages.component";
import {AuthenticationComponent} from "./components/auth/authentication.component";
import {routing} from "./components/app/routes";
import {HeaderComponent} from "./components/app/header.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessagesComponent,
        MessageListComponent,
        MessageInputComponent,
        AuthenticationComponent,
        HeaderComponent

    ],
    imports: [BrowserModule,
                FormsModule,
                RouterModule,
                routing],
    providers: [MessageService],
    bootstrap: [AppComponent]

})
export class AppModule {

}