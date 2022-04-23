import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductCategoryService } from 'src/app/services/product-category-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  form: boolean = false;
  productCategory!: ProductCategory;
  closeResult!: string;
  listPc :any;
  listSize;
  constructor(private pc: ProductCategoryService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllPc();
    this.productCategory = {
      idCategoryProd: null,
      name_CategoryProd: null,
	    desc_CategoryProd: null,
	    products: null,
	   
  }
  }
  getAllPc() {
    this.pc.getAllPc().subscribe((res) => {
      this.listPc = res;
    this.listSize=(Array)(this.listPc).length}
      )
  }
  
  addPc(prc: any) {
    this.pc.addPc(prc).subscribe(()=> {
      this.getAllPc();//après ajout bch yaffichi liste des produits
      this.form = false;
    });
  
  }
  
  editPc(productCategory: ProductCategory) {
    this.pc.editPc(productCategory).subscribe();
  }
  
  deletePc(idCategoryProd: any) {
    this.pc.deletePc(idCategoryProd).subscribe(()=> this.getAllPc());
  }
  
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getAllPc()}`;
    });
    }
  

}
