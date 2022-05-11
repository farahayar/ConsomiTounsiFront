import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Approved } from '../models/approved';

@Injectable({
  providedIn: 'root'
})
export class ApprovedService {

  readonly API_URL = environment.API_URL+"/likesController";

  constructor(private httpClient: HttpClient) { }
  
  getAllLikes() {
    return this.httpClient.get(`${this.API_URL}/afficherlikes`)
  }
 
  addLike(approved : Approved,idUser:any,id:any) {
    return this.httpClient.post(`${this.API_URL}/ajouterlike/${idUser}/${id}`, approved)
  }

  unApprove(idUser:any,id:any) {
    return this.httpClient.get(`${this.API_URL}/unApprove/${idUser}/${id}`)
  }
 
}
