import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { Problems } from '../models/problems';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  readonly API_URL = environment.API_URL+"/problemsController";

  constructor(private httpClient: HttpClient) { }
  
  getAllProblems() {
    return this.httpClient.get(`${this.API_URL}/afficherProblems`)
  }
  recently() {
    return this.httpClient.get(`${this.API_URL}/recently`)
  }
  getProblem(id: any) {
    return this.httpClient.get(`${this.API_URL}/afficherProblem/${id}`)
  }
  addProblem(problem : Problems,tags:[],id:any) {
    console.log(tags.map(elem=>{console.log(elem," ****");return {tag:elem}}))
    return this.httpClient.post(`${this.API_URL}/ajouterProblem/${id}`, {problem:problem,tags:tags.map(elem=>{return {tag:elem}})})
  }
  editProblem(problem : Problems){
    return this.httpClient.put(`${this.API_URL}/updateProblem`, problem)
  }
  deleteProduct(id : any){
    return  this.httpClient.delete(`${this.API_URL}/deleteProblem/${id}`)
  }

  closeProblem(id : any){
    return  this.httpClient.get(`${this.API_URL}/closeProblem/${id}`)
  }
}
