import { User } from "./user";

export class Problems {
    idProb : any;
    subject : any;
    closed : boolean;
    user : User;
    constructor(idProb:any,subject:any,closed:boolean,user:User){
        this.idProb = idProb;
        this.subject = subject;
        this.closed = closed;
        this.user = user;
    }
}
