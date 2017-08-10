/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Message } from "../../models/message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-list',
    templateUrl: 'message-list.component.html'
})

export class MessageListComponent implements OnInit{
    constructor(private messageService: MessageService){}
    messages: Message[];

    ngOnInit(){
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => this.messages = messages
            )
    }
}