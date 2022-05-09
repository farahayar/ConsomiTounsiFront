import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ProductCategoryService } from 'src/app/services/product-category-service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  listPc: any;
  form: boolean = false;
  products!: Products;
  closeResult!: string;
  listProducts: any;
  listSize;
  searchInput: string = "";
  a: any = [];

  constructor(private productService: ProductService, private modalService: NgbModal, private pc: ProductCategoryService) { } //amlna injection lproduct service , private modalService: NgbModal
  //constructor() { }

  ngOnInit(): void {
    this.getAllPc();
    this.getAllProducts();
    this.products = {
      idProd: null,
      barCode: null,
      nameProd: null,
      unit_price_htva: null,
      tva: null,
      productCategory: null,
      ads: null,
      add_date:null
    }
    
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.listProducts = res;
      this.a = res;
      this.listSize = (Array)(this.listProducts).length
    }
    )
  }
  addProduct(p: any, idCategoryProd:any) {
  
    this.productService.addProduct(p,idCategoryProd).subscribe(() => {
    this.getAllProducts();//après ajout bch yaffichi liste des produits
    this.ngOnInit();
   
    this.form = false;
   // else
    
    

  });


  }

  editProduct(product: Products) {
    this.productService.editProduct(product).subscribe();
  }

  deleteProduct(idProd: any) {
    this.productService.deleteProduct(idProd).subscribe(() => this.getAllProducts());
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getAllProducts()}`;
    });
  }

  onSearchChange2() {
    if (this.searchInput.length)
      this.listProducts = this.listProducts.filter(elem => elem.nameProd.toLowerCase().includes(this.searchInput.toLowerCase()))
    else
      this.listProducts = this.a;
  }
  getAllPc() {
    this.pc.getAllPc().subscribe((res) => {
      this.listPc = res;
      this.a = res;
      this.listSize = (Array)(this.listPc).length
    }
    )
  }

  cancel(){
    this.ngOnInit();
  }


}
