import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Approved } from 'src/app/models/approved';
import { Comments } from 'src/app/models/comments';
import { Problems } from 'src/app/models/problems';
import { ApprovedService } from 'src/app/services/approved.service';
import { CommentsService } from 'src/app/services/comments.service';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss']
})
export class ShowQuestionComponent implements OnInit {
  //Todo : User
  currentUser = 1;
  id: any;
  problem !: any;
  upvotes: number;
  downvotes: number;
  votes: number;
  upSubject = false;
  downSubject = false;
  canClose = false;
  closed: boolean;
  addComment: FormGroup;
  listComments: any;
  constructor(private route: ActivatedRoute, private toastr: ToastrService, private fb: FormBuilder, private fs: ForumService, private fc: CommentsService, protected fa: ApprovedService) {
    [
      this.addComment = fb.group({

        comment: new FormControl("", [
          Validators.required,
          Validators.minLength(2)
        ])


      })


    ]
  }

  get comment() {
    return this.addComment.get('comment');
  }

  // To load CSS file
  loadCSS() {
    return new Promise((res, rej) => {
      let cssfiles = ["/assets/forum/css/bootstrap.min.css",
        "/assets/forum/css/line-awesome.css",
        "/assets/forum/css/owl.carousel.min.css",
        "/assets/forum/css/owl.theme.default.min.css",
        "/assets/forum/css/jquery-te-1.4.0.css",
        "/assets/forum/css/upvotejs.min.css",
        "/assets/forum/css/selectize.css",
        "/assets/forum/css/style.css",
      ];
      var head = document.getElementsByTagName('head')[0]

      // Creating link element
      for (let data of cssfiles) {
        var style = document.createElement('link')
        style.href = data
        style.type = 'text/css'
        style.rel = 'stylesheet'
        head.append(style);

      }

      return res("success");
    })
  }
  loadJS() {
    return new Promise((res, rej) => {
      let jsfile = [
        "/assets/forum/js/jquery-3.4.1.min.js",
        "/assets/forum/js/bootstrap.bundle.min.js",
        "/assets/forum/js/owl.carousel.min.js",
        "/assets/forum/js/jquery-te-1.4.0.min.js",
        "/assets/forum/js/upvote.vanilla.js",
        "/assets/forum/js/upvote-script.js",
        "/assets/forum/js/selectize.min.js",
        "/assets/forum/js/jquery.multi-file.min.js",
        "/assets/forum/js/main.js",

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

  ngOnInit(): void {
    this.loadCSS();
    // this.loadJS();
    this.id = this.route.snapshot.paramMap.get('id');
    this.fs.getProblem(this.id).subscribe((res) => {
      this.problem = res;
      console.log("probelmm " + this.problem.title);
      let r: any = res;
      if (r.user.userid === this.currentUser) { this.canClose = true; }
      this.closed = this.problem.closed;
      this.upvotes = 0;
      this.downvotes = 0;
      this.listComments = r.comments;
      r.Approveds.forEach(element => {
        if (element.approved) {
          this.upvotes++;
        } else {
          this.downvotes++;
        }
      });
      this.votes = this.upvotes - this.downvotes;

      if (this.votes > 0) {
        this.upSubject = true;
      } else if (this.votes < 0) {
        this.downSubject = true;
      }
    })






  }

  closeSubject() {

    this.fs.closeProblem(this.problem.idProb).subscribe((res) => {
      let r: any = res;
      //this.problem = res;
      this.closed = r.closed;
    })
  }

  commentSubject() {
    let data = this.addComment.value;
    this.fc.addComments(new Comments(null, false, data.comment, 0), this.currentUser, "Problem", this.problem.idProb).subscribe((rest) => {
      this.ngOnInit();
      this.toastr.success("Thank you for your contibution!");
      this.addComment.reset();
    }, (err) => {
      this.toastr.error("Please retry later");
    })
  }

  addApproveComment(id) {
    this.fc.addApprove(id).subscribe((res) => {
      this.listComments = res;
    })
  }

  upApprovSubject() {
    this.fa.addLike(new Approved(null, 1), this.currentUser, this.problem.idProb).subscribe((res) => {
      let r: any = res;
      r.Approveds.forEach(element => {
        if (element.approved) {
          this.upvotes++;
        } else {
          this.downvotes++;
        }
      });
      this.votes = this.upvotes - this.downvotes;

      if (this.votes > 0) {
        this.upSubject = true;
      } else if (this.votes < 0) {
        this.downSubject = true;
      }
    })
  }

  unApprove(){
    this.fa.unApprove(this.currentUser, this.problem.idProb).subscribe((res) => {
      let r: any = res;
     this.ngOnInit();
    })
  }
}
