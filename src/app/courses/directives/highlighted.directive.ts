import {Directive, HostBinding, Input} from '@angular/core';


@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  constructor() {
  }

  @HostBinding('class.highlighted')
  get cssClass() {
    return this.isHighlighted;
  }


}
