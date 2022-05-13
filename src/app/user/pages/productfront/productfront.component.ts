import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Products } from 'src/app/models/products';
import { ProductCategoryService } from 'src/app/services/product-category-service';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/models/product-category';
import { DatePipe } from '@angular/common';
import { RatingService } from 'src/app/services/rating-service';
import { Rating } from 'src/app/models/rating';
declare var $: any;



@Component({
  selector: 'app-productfront',
  templateUrl: './productfront.component.html',
  styleUrls: ['./productfront.component.scss']
  
})
export class ProductfrontComponent implements OnInit {
  cp: number = 1;
  listProductsCat:any;
  listPc :any;
  form: boolean = false;
  products!: Products;
  productCategory!: ProductCategory;
  closeResult!: string;
  listProducts :any;
  listRecentProducts :any;
  listSize;
  searchInput: string = "";
  a: any = [];
  starRating = 0; 
  //curDate= new Date();
  curDate: Date = new Date();
 title = 'toaster-not';
  name = 'ngx sharebuttons';
  currentRate = 6;
  listSizep;
  
  
  

  constructor(private productService: ProductService,private pc: ProductCategoryService ,private ra:RatingService,private router: Router, private modalService: NgbModal,public datepipe: DatePipe) { 
   let curDate =this.datepipe.transform((new Date), 'yyyy/MM/dd');
  
   console.log(curDate);  } 
   //amlna injection lproduct service , private modalService: NgbModal
  //constructor() { }

  ngOnInit(): void {
    this.getAllPc();
    this.getAllProducts();
    this.getRecentProducts();
    //this.getProductByCategorie(this.productCategory);
    this.loadJS();
    this.products = {
      idProd: null,
      barCode: null,
	    nameProd: null,
	    unit_price_htva: null,
	    tva: null,
	    productCategory: null,
	    ads: null,
      add_date:null,
      
      
      
      
  }

 
  this.getAllPc();
    this.productCategory = {
      idCategoryProd: null,
      name_CategoryProd: null,
	    desc_CategoryProd: null,
	    products: null,
	   
  }
}
getAllProducts() {
  this.productService.getAllProducts().subscribe((res) => {
    this.listProducts = res;
    this.a = res;
    

   this.listSizep = (Array)(this.listProducts).length
    
  }
  )
}


getRecentProducts() {
  this.productService.getRecentProducts().subscribe((res) => {
    this.listRecentProducts = res;
    //console.log("date"+this.curDate)
    this.listSize=(Array)(this.listRecentProducts).length

    //this.a = res;
   // this.listSize = (Array)(this.listProducts).length
    
  }
  )
}
getProductByCategorie(idCategoryProd: any) {
    this.productService.getProductByCategorie(idCategoryProd).subscribe((res) => {
    this.listProductsCat = res;
    $('#mymodal6').modal('show');
   // router.navigate(['/role']);
   
    
  }
  )
}

addProduct(p: any, idCategoryProd:any) {

  
  console.log("aaaaaaaaaa"+idCategoryProd);
    this.products.add_date=new Date;
    this.productService.addProduct(p,idCategoryProd).subscribe(() => {
    this.getAllProducts();//après ajout bch yaffichi liste des produits
    this.ngOnInit();
   
    this.form = false;
   // else
   
  });

}

addBatch(products){
  this.productService.addBatch(products).subscribe(() => {
    this.getAllProducts();
  });
}

editProduct(product: Products) {
  this.productService.editProduct(product).subscribe();
}

deleteProduct(idProd: any) {
  this.productService.deleteProduct(idProd).subscribe(() => this.getAllProducts());
}
getProductDetails(idProd: any) {
  this.productService.getProductDetails(idProd).subscribe();
 
  //const navigationDetails: string[] = ['/details'];
}




onSearchChange() {
  if (this.searchInput.length)
    this.listProducts = this.listProducts.filter(elem => elem.nameProd?.toLowerCase().includes(this.searchInput.toLowerCase()))
  else
    this.listProducts = this.a;
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
    //this.ngOnInit();
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
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getAllProducts()}`;
  });
}

cancel(){
  this.ngOnInit();
}

loadJS() {
  return new Promise((res, rej) => {
    let jsfile = [
      "/assets/js/star.js",
    ];

    var head = document.getElementsByTagName('head')[0]

    // Creating link element
    for (let data of jsfile) {
      var script = document.createElement('script')
      script.src = data
      script.type = 'text/javascript'
      head.append(script);

    }

    return res("success");
  })
}


rate(){
  
  console.log("aaaaaaaaababbababab");
  let r= new Rating(null,this.currentRate);
 
  this.ra.addRating(r,1,5).subscribe((res)=>{
    console.log(res);
    
  },(err)=>{

  });
  //console.log("aaaaaaaaaaaa"+currentRate+$userid+$idProd);
    

}
}


