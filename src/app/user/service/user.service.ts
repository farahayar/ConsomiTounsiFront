import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{
  constructor() {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) {
     }

  public registerUser(user) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.username + ':' + user.password) });
    return this.httpClient.post<Employee>("http://localhost:8080/register", user,{headers});
  }
}
