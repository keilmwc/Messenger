/**
 * Created by KeilCarpenter on 30/06/2017.
 */
import { Component} from '@angular/core';


@Component({
    selector: 'app-messages',
    templateUrl: `
        <div class="container">
            <div class="row">
                <app-message-input></app-message-input>
            </div>
            <hr>
            <div class="row">
                <app-message-list></app-message-list>
            </div>
        </div>            
    `
})

export class MessagesComponent{

}