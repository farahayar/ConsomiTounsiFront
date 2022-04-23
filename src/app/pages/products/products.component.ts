import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 
  form: boolean = false;
  products!: Products;
  closeResult!: string;
  listProducts :any;
  listSize;

  constructor(private productService: ProductService , private modalService: NgbModal) { } //amlna injection lproduct service , private modalService: NgbModal
  //constructor() { }

  ngOnInit(): void {
    this.getAllProducts();
    this.products = {
      idProd: null,
      barCode: null,
	    nameProd: null,
	    unit_price_htva: null,
	    tva: null,
	    productCategory: null,
	    ads: null
  }
}
getAllProducts() {
  this.productService.getAllProducts().subscribe((res) => {
    this.listProducts = res;
  this.listSize=(Array)(this.listProducts).length}
    )
}

addProduct(p: any) {
  this.productService.addProduct(p).subscribe(()=> {
    this.getAllProducts();//après ajout bch yaffichi liste des produits
    this.form = false;
  });

}

editProduct(product: Products) {
  this.productService.editProduct(product).subscribe();
}

deleteProduct(idProd: any) {
  this.productService.deleteProduct(idProd).subscribe(()=> this.getAllProducts());
}

open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getAllProducts()}`;
  });
  }


}
