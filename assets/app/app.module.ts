import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from "./components/app/app.component";
import { MessageComponent } from "./components/messages/messages.component";
import { MessageListComponent } from "./components/messages/message-list.component";
import { MessageInputComponent } from "./components/messages/message-input.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent

    ],
    imports: [BrowserModule,
                FormsModule,],
    bootstrap: [AppComponent]

})
export class AppModule {

}