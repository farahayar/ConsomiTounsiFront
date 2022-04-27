import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Products } from 'src/app/models/products';


@Component({
  selector: 'app-productfront',
  templateUrl: './productfront.component.html',
  styleUrls: ['./productfront.component.scss']
})
export class ProductfrontComponent implements OnInit {

  form: boolean = false;
  products!: Products;
  closeResult!: string;
  listProducts :any;
  listSize;
  searchInput: string = "";
  a: any = [];

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

onSearchChange(){
  if(this.searchInput.length)
    this.listProducts = this.listProducts.filter(elem=>elem.nameProd.toLowerCase().includes(this.searchInput.toLowerCase()))
  else
    this.listProducts = this.a;
}

}
