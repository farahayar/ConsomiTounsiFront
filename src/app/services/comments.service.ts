import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  readonly API_URL = environment.API_URL+"/commentsController";

  constructor(private httpClient: HttpClient) { }
  
  getAllComments() {
    return this.httpClient.get(`${this.API_URL}/afficherComments`)
  }
 
  addComments(comment : Comments,idUser:any,on:any,id:any) {
    return this.httpClient.post(`${this.API_URL}/ajouterComment/${id}/${idUser}/${on}`, comment)
  }

  addApprove(id:any) {
    return this.httpClient.get(`${this.API_URL}/addApprove/${id}`)
  }
 
}
