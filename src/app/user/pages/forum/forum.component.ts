import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  listProblems: any;
  searchInput: string = "";
  searchedElements: any;
  recently:any;

  constructor(private fs: ForumService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.fs.recently().subscribe((res)=>{
      this.recently=res;
    })
    
  }

  getAllProducts(){
    this.fs.getAllProblems().subscribe((res) => {
      this.listProblems = res;
      this.searchedElements=res;
      console.log("res :"+res);
      
    }, (err) => {
      console.log(err);

    });
  }

  onSearchChange(){
    if(this.searchInput.length)
      this.listProblems = this.listProblems.filter(elem=>elem.title.toLowerCase().includes(this.searchInput.toLowerCase()))
    else
      this.listProblems = this.searchedElements;
  }

}
