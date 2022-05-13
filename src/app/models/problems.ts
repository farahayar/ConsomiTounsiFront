import { User } from "./user";

export class Problems {
    idProb ?: any;
    title?: any;
    subject ?: any;
    closed ?: boolean;
    user ?: User;
    constructor(idProb?:any,title?:any,subject?:any,closed?:boolean,user?:User){
        this.idProb = idProb;
        this.title=title;
        this.subject = subject;
        this.closed = closed;
        this.user = user;
    }
}
