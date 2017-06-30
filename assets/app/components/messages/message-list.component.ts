/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Component } from '@angular/core';
import { Message } from "../../models/message.model";

@Component({
    selector: 'app-message-list',
    templateUrl: `
        <div class="col-md-8.col-md-offset-2">
            <app-message [message]="message"
             *ngFor="let message of messages"
             (editClicked)="message.content = $event"></app-message>
        </div>                 
    `
})

export class MessageListComponent{
    messages: Message[] = [
        new Message('Test Message 1', 'Keil'),
        new Message('Test Message 2', 'Keil')

    ]
}