/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import {Message} from "../../models/message.model";

export class MessageService{
    private messages: Message[];

    addMessage(message: Message): void{
        this.messages.push(message);
    }

    getMessage(): Message[]{
        return this.messages;
    }

    deleteMessage(message: Message): void{
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}