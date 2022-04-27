import { Component, OnInit } from '@angular/core';
import { Ads } from 'src/app/models/ads';
import { AdsService } from 'src/app/services/ads-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  form: boolean = false;
  ads: any=[];
  closeResult!: string;
  listAds :any;
  listSize;
  searchInput: string = "";
  a: any = [];
  


  constructor(private adsService: AdsService , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllAds();
    this.ads = {
      idAds: null,
      nameAds: null,
	    channel: null,
	    start_date: null,
	    final_date: null,
	    nb_initial_views: null,
	    nb_final_views: null,
      cost: null,
      type_ads: null,
      products: null,

  }
  }

  getAllAds() {
  this.adsService.getAllAds().subscribe((res) => {
    this.listAds = res;
    this.a = res;
    console.log("res"+res);
    
  this.listSize=(Array)(this.listAds).length}
    )
}

addAds(ad: any) {
  this.adsService.addAds(ad).subscribe(()=> {
    this.getAllAds();//après ajout bch yaffichi liste des produits
    this.form = false;
  });

}

editAds(ads: Ads) {
  this.adsService.editAds(ads).subscribe();
}

deleteAds(idAds: any) {
  this.adsService.deleteAds(idAds).subscribe(()=> this.getAllAds());
}

open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getAllAds()}`;
  });
  }

  onSearchChange(){
    if(this.searchInput.length)
      this.listAds = this.listAds.filter(elem=>elem.nameAds.toLowerCase().includes(this.searchInput.toLowerCase()))
    else
      this.listAds = this.a;
  }

  



}
