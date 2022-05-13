export class Comments {
    id?:any;
	response?:any;
	comment?:any;
	approved?:any;

    constructor(id?:any,response?:any,comment?:any,approved?:any){
        this.id = id;
        this.response=response;
        this.comment = comment;
        this.approved = approved;
    }
}
