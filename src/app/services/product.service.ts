import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn:'root' 
})
export class ProductService {
    readonly API_URL = 'http://localhost:8087/ConsommiTounsi';
    constructor(private httpClient: HttpClient) { }

    getAllProducts(){
        return this.httpClient.get(`${this.API_URL}/afficherProducts`)
    }
    getRecentProducts(){
        return this.httpClient.get(`${this.API_URL}/afficherRecentProducts`)
    }
    getProductByCategorie(idCategoryProd:any){
        return this.httpClient.get(`${this.API_URL}/afficherProductByC/${idCategoryProd}`)
    }
    getProductDetails(idProd: any){
        return this.httpClient.get(`${this.API_URL}/afficherProducts/${idProd}`)
    }
    addProduct(products: any, idCategoryProd){
        return this.httpClient.post(`${this.API_URL}/ajouterproduct/${idCategoryProd}`, products)
    }
    addBatch(products){
        return this.httpClient.post(`${this.API_URL}/add-batch`,products)
    }
    editProduct(products: any){
        return this.httpClient.put(`${this.API_URL}/updateproduct`, products)
    }
    deleteProduct(idProd: any){
        return this.httpClient.delete(`${this.API_URL}/deleteproduct/${idProd}`)
    }



}
