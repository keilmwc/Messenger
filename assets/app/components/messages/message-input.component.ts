/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Component, Output } from '@angular/core';
import { MessageService } from './message.service';
import {Message} from "../../models/message.model";


@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})

export class MessageInputComponent{
    constructor(private messageService: MessageService){}

    onSave(value: string){
        const message = new Message(value, 'Keil');
        this.messageService.addMessage(message);
    }
}