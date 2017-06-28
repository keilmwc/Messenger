import {Component} from '@angular/core';
import { Message } from '../../models/message.model';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    message: Message = new Message("Message", "Keil");
}