import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { TagsChangedEvent } from 'ngx-tags-input';
import { ToastrService } from 'ngx-toastr';
import { Problems } from 'src/app/models/problems';
import { User } from 'src/app/models/user';
import { ForumService } from 'src/app/services/forum.service';
declare var $: any;




@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {

  problem !: Problems;
  tag = "";
  addProblem: FormGroup;
  idProb:any;

  onTagsChangedParam = [{
    displayValue: 'list'
  }, {
    displayValue: 'of'
  }, {
    displayValue: 'predefined'
  }, {
    displayValue: 'tags'
  }]

  onTagsChangedOutput = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      []
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  constructor( private toastr: ToastrService,private fb: FormBuilder, private fs:ForumService ,private router: Router) {
    let cssfiles = [
      "/assets/forum/css/bootstrap.min.css",
      "/assets/forum/css/line-awesome.css",
      "/assets/forum/css/owl.carousel.min.css",
      "/assets/forum/css/owl.theme.default.min.css",
      // "/assets/forum/css/jquery-te-1.4.0.css",
      "/assets/forum/css/selectize.css",
      "/assets/forum/css/style.css",
      "/assets/forum/css/bootstrap-tagsinput.css"
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
    [
      this.addProblem = fb.group({

        title: new FormControl("", [
          Validators.required,
          Validators.minLength(2)
        ]),
        subject: new FormControl("", [
          Validators.required,
          Validators.minLength(10)

        ]),
        tags: new FormControl("", [

        ])


      })


    ]
  }

  get title() {
    return this.addProblem.get('title');
  }
  get subject() {
    return this.addProblem.get('subject');
  }
  get tags() {
    return this.addProblem.get('tags');
  }



  loadJS() {
    return new Promise((res, rej) => {
      let jsfile = [
        "/assets/forum/js/bootstrap-tagsinput.js",
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

  async ngOnInit() {
    await this.loadJS();
   

  }

  addSubject() {
    let data = this.addProblem.value;
    let ts=$("select").tagsinput('items');
    
    let p= new Problems(null,data.title,data.subject,false,null );
    console.log("data : " +JSON.stringify(p) );
    console.log("data : " +ts.join('').split(',') );
    this.fs.addProblem(p,ts.join('').split(','),1).subscribe((res:any)=>{
      //console.log("res"+res.problem);
      
      if(res==null){
        this.toastr.error("Please avoid negative words");
      }else{
        if(res.existes){
          console.log("res.problem.idProb"+res.problem.idProb);
          
          this.idProb=res.problem.idProb;
          $("#myModal").css("display","block") ;
         // $('#problemExisesModal').modal('show'); 
         $(".closemyModal").click(function(){
          $("#myModal").css("display","none") ;
        })
        }else{
          this.toastr.success("Added succesfully");
        }
        
      }
    },(err)=>{
      this.toastr.error("An error has accured please retry later");
    })
    //

  }

  existingSubject(){
    //this.router.navigate(['/home/showQuestion'], { queryParams: { id: this.idProb }});
    this.router.navigate(['/home/showQuestion', this.idProb ]);
    //this.router.navigateByUrl(`/home/showQuestion/${this.idProb}`);
  }


  // public onTagsChangedEventHandler(event: TagsChangedEvent): void {
  //   this.onTagsChangedOutput = JSON.stringify(event);
  // }

  // onMaxTagsReachedParam = [];
  // onMaxTagsReachedFired = false;

  // public onMaxTagsReachedEventHandler(): void {
  //   this.onMaxTagsReachedFired = true;
  // }

  // onNoOptionsMatchParam = [];
  // onNoOptionsMatchOutput = false;

  // public onNoOptionsMatchEventHandler(noOptionsMatched): void {
  //   this.onNoOptionsMatchOutput = noOptionsMatched;
  // }

  

}
