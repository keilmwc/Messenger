import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from "./components/app/app.component";
import { MessageComponent } from "./components/messages/messages.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent
    ],
    imports: [BrowserModule,
                FormsModule,],
    bootstrap: [AppComponent]

})
export class AppModule {

}