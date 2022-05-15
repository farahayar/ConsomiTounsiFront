import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn:'root' 
})
export class AdsService {
    readonly API_URL = 'http://localhost:8087/ConsommiTounsi';
    constructor(private httpClient: HttpClient) { }

    getAllAds(){
        return this.httpClient.get(`${this.API_URL}/afficherAds`)
    }
    addAds(ad: any){
        return this.httpClient.post(`${this.API_URL}/ajouterAds`, ad)
    }
    editAds(ad: any){
        return this.httpClient.put(`${this.API_URL}/updateAds`, ad)
    }
    deleteAds(idAds: any){
        return this.httpClient.delete(`${this.API_URL}/deleteAds/${idAds}`)
    }
}
