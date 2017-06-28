/**
 * Created by KeilCarpenter on 28/06/2017.
 */
export class Message {
    constructor(public content: string,
                public username: string,
                public messageId?: string,
                public userId?: string){
    }
}