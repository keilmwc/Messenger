/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import {Message} from "../../models/message.model";
import { Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})

export class MessageInputComponent implements OnInit{
    myForm: FormGroup;
    message: Message;
    constructor(private messageService: MessageService){}

    onSubmit(){
        if(this.message){
            this.message.content = this.myForm.value.content;
            this.messageService.updateMessage(this.message).subscribe(result => console.log(result));
            this.message = null;
        }

        const message = new Message(this.myForm.value.content, 'Kedddddil');
        this.messageService.addMessage(message).subscribe(
            data => console.log(data),
            error => console.error(error)
        );

        this.myForm.reset();
    }

    onClear(){
        this.message = null;
        this.myForm.reset();
    }
    ngOnInit(){
        this.myForm = new FormGroup({
            content: new FormControl(null, Validators.required)
        });

        this.messageService.editMessageClicked.subscribe(
            (message: Message) => this.message = message
        );
    }
}