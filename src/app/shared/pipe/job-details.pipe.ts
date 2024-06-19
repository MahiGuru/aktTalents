import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'jobDetails',
  standalone: true
})
export class JobDetailsPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {}

  transform(value: any, ...args: unknown[]): unknown {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }

}
