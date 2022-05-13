  import { Pipe, PipeTransform } from '@angular/core';
  import { DomSanitizer } from '@angular/platform-browser'
  /*
   * Raise the value exponentially
   * Takes an exponent argument that defaults to 1.
   * Usage:
   *   value | exponentialStrength:exponent
   * Example:
   *   {{ 2 | exponentialStrength:10 }}
   *   formats to: 1024
  */
  @Pipe({name: 'htmldecoder'})
  export class HtmldecoderPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) {}
    transform(input) {
      return this.sanitized.bypassSecurityTrustHtml(input);
  }
  }