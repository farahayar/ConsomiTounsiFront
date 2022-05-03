import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  constructor() { }

  loadCSS() {
    return new Promise((res, rej) => {
      let cssfiles = ["/assets/forum/css/bootstrap.min.css", 
      "/assets/forum/css/line-awesome.css",
      "/assets/forum/css/owl.carousel.min.css",
      "/assets/forum/css/owl.theme.default.min.css",
     // "/assets/forum/css/jquery-te-1.4.0.css",
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
      let jsfile = ["/assets/forum/js/jquery-3.4.1.min.js", 
        "/assets/forum/js/bootstrap.bundle.min.js",
        "/assets/forum/js/owl.carousel.min.js",
        "/assets/forum/js/jquery-te-1.4.0.min.js",
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

  async ngOnInit() {
    this.loadCSS;
    this.loadJS();
  }

}
