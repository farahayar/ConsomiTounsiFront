import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn:'root' 
})

    
export class RatingService {
    readonly API_URL = 'http://localhost:8087/ConsommiTounsi';
    constructor(private httpClient: HttpClient) { }

    addRating(rating: any, userid:any, idProd:any){
        return this.httpClient.post(`${this.API_URL}/ajouterRating/${userid}/${idProd}`, rating)
    }
}
