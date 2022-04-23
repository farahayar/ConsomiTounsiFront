import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn:'root' 
})
export class ProductCategoryService {
    readonly API_URL = 'http://localhost:8087/ConsommiTounsi';
    constructor(private httpClient: HttpClient) { }

    getAllPc(){
        return this.httpClient.get(`${this.API_URL}/afficherAllPc`)
    }
    addPc(pc: any){
        return this.httpClient.post(`${this.API_URL}/ajouterPc`, pc)
    }
    editPc(pc: any){
        return this.httpClient.put(`${this.API_URL}/updatePc`, pc)
    }
    deletePc(idCategoryProd: any){
        return this.httpClient.delete(`${this.API_URL}/deletePc/${idCategoryProd}`)
    }
}
