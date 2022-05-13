import { logging } from "protractor";
import { User } from "./user";

export class Chat {
    sender:User;
    reciver:User;
    message:string;
    date:Date;
    constructor(sender:User,reciver:User,message:string,date:Date){
        this.sender = sender;
        this.reciver = reciver;
        this.message = message;
        this.date = date;
    }


}
