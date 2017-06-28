/**
 * Created by KeilCarpenter on 28/06/2017.
 */
import {Component, Input} from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
    selector: 'app-message',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})

export class MessageComponent{
    @Input() message: Message;
}