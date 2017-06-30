/**
 * Created by KeilCarpenter on 28/06/2017.
 */
import {Component, Input, Output} from '@angular/core';
import { Message } from '../../models/message.model';
import {EventEmitter} from "@angular/common/src/facade/async";
import {MessageService} from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent{
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService){}

    onEdit(){
        this.editClicked.emit('editing');
    }

    onDelete(){
        this.messageService.deleteMessage(this.message);
    }
}