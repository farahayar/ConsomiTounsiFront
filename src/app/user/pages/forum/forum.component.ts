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

  constructor(private fs: ForumService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.fs.getAllProblems().subscribe((res) => {
      this.listProblems = res;
      console.log("res :"+res);
      
    }, (err) => {
      console.log(err);

    });
  }

}
