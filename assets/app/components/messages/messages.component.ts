/**
 * Created by KeilCarpenter on 28/06/2017.
 */
import {Component, Input, Output} from '@angular/core';
import { Message } from '../../models/message.model';
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
    selector: 'app-message',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})

export class MessageComponent{
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(){}

    onEdit(){
        this.editClicked.emit('event emitted');
    }
}