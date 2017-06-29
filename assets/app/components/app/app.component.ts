import {Component} from '@angular/core';
import { Message } from '../../models/message.model';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    messages: Message[] = [
        new Message('Test Message 1', 'Keil'),
        new Message('Test Message 2', 'Keil')

    ]
}