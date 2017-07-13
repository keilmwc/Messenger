/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Message } from "../../models/message.model";
import { Http, Response, Headers } from '@angular/http';
import {EventEmitter, Injectable, Output} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessageService{
    private messages: Message[] = [];
    editMessageClicked = new EventEmitter<Message>();

    constructor(private http: Http){}

    addMessage(message: Message){
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});

        // sends token with each request when adding a message
        // check if token exists and append to query param
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('http://localhost:3000/message' + token, body, {headers: headers})
            .map(
                (response: Response) => {
                    const result = response.json();
                    const message = new Message(result.object.content, result.object.user.firstName, result.object._id, result.object.user._id);
                    this.messages.push(message);
                    return message;
                }
            )
            .catch((error: Response) => Observable.throw(error.json()))
    }

    getMessages() {
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().object;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()))
    }

    updateMessage(message: Message){
        // sends token with each request when adding a message
        // check if token exists and append to query param
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }

    editMessage(message: Message){
        this.editMessageClicked.emit(message);
    }

    deleteMessage(message: Message){
        // sends token with each request when adding a message
        // check if token exists and append to query param
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }
}