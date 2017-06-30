/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Component, Output } from '@angular/core';
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent{
    @Output() saveClicked = new EventEmitter<string>();

    onSave(value: string){
        console.log(value);
    }
}