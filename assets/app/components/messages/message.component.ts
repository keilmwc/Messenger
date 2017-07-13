/**
 * Created by KeilCarpenter on 28/06/2017.
 */
import {Component, Input} from '@angular/core';
import { Message } from '../../models/message.model';
import {MessageService} from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent{
    @Input() message: Message;

    constructor(private messageService: MessageService){}

    onEdit(){
        this.messageService.editMessage(this.message);
    }

    onDelete(){
        this.messageService.deleteMessage(this.message).subscribe(result => console.log(result));
    }

    belongsToUser(){
        // Only for user experience, validation is done on server
        return localStorage.getItem('userId') == this.message.userId;
    }
}