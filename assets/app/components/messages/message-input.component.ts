/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Component, Output } from '@angular/core';
import { MessageService } from './message.service';
import {Message} from "../../models/message.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})

export class MessageInputComponent{
    constructor(private messageService: MessageService){}

    onSubmit(form: NgForm){
        const message = new Message(form.value.content, 'Keil');
        this.messageService.addMessage(message);
    }
}