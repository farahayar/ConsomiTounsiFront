import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {

  constructor() { }
// To load CSS file
loadCSS() {
  return new Promise((res, rej) => {
    let cssfiles = ["/assets/css/main.css?v=1.1", "/assets/css/plugins/animate.min.css"];
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
    let jsfile = [ "/assets/js/vendor/jquery-3.6.0.min.js",
      "/assets/js/vendor/bootstrap.bundle.min.js",
      "/assets/js/vendors/select2.min.js",
      "/assets/js/plugins/perfect-scrollbar.js",
      "/assets/js/vendors/jquery.fullscreen.min.js",
      "/assets/js/vendors/chart.js",
      "/assets/js/main.js?v=1.1",
      "/assets/js/custom-chart.js",

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
  this.loadCSS();
  this.loadJS();
}

}
