import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/services/ads-service';
import { Ads } from 'src/app/models/ads';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adsfront',
  templateUrl: './adsfront.component.html',
  styleUrls: ['./adsfront.component.scss']
})
export class AdsfrontComponent implements OnInit {

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

}
