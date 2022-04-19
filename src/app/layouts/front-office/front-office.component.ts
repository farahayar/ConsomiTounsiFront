import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.scss']
})
export class FrontOfficeComponent implements OnInit {


  constructor() { }
  // To load CSS file
  loadCSS() {
    return new Promise((res, rej) => {
      let cssfiles = ["/assets/css/mainf.css?v=4.0", "/assets/css/plugins/animate.min.css"];
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
      let jsfile = ["/assets/js/vendor/modernizr-3.6.0.min.js", "/assets/js/vendor/jquery-3.6.0.min.js",
        "/assets/js/vendor/jquery-migrate-3.3.0.min.js",
        "/assets/js/vendor/bootstrap.bundle.min.js",
        "/assets/js/plugins/slick.js",
        "/assets/js/plugins/jquery.syotimer.min.js",
        "/assets/js/plugins/waypoints.js",
        "/assets/js/plugins/wow.js",
        "/assets/js/plugins/perfect-scrollbar.js",
        "/assets/js/plugins/magnific-popup.js",
        "/assets/js/plugins/select2.min.js",
        "/assets/js/plugins/counterup.js",
        "/assets/js/plugins/jquery.countdown.min.js",
        "/assets/js/plugins/images-loaded.js",
        "/assets/js/plugins/isotope.js",
        "/assets/js/plugins/scrollup.js",
        "/assets/js/plugins/jquery.vticker-min.js",
        "/assets/js/plugins/jquery.theia.sticky.js",
        "/assets/js/plugins/jquery.elevatezoom.js"

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
