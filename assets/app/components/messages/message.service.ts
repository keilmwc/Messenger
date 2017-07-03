/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Message } from "../../models/message.model";
import { Http, Response, Headers } from '@angular/Http';
import {EventEmitter, Injectable, Output} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessageService{
    private messages: Message[] = [];
    editMessageClicked = new EventEmitter<Message>();

    constructor(private http: Http){}

    addMessage(message: Message){
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }

    getMessages() {
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().object;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, 'Dummy Message', message._id, null));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()))
    }

    editMessage(message: Message){
        this.editMessageClicked.emit(message);
    }

    deleteMessage(message: Message): void{
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}