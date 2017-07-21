/**
 * Created by KeilCarpenter on 21-Jul-17.
 */

import {EventEmitter} from "@angular/common/src/facade/async";
import {Error} from './error.model';

export class ErrorService{
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any){
        const errorData = new Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    }
}