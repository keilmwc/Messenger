/**
 * Created by KeilCarpenter on 28/06/2017.
 */
import {Component, Input, Output} from '@angular/core';
import { Message } from '../../models/message.model';
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent{
    @Input() message: Message;

    constructor(){}

    onEdit(){

    }
}