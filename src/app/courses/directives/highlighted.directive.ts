import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';


@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;
  @Output()
  toggleHighlight = new EventEmitter<boolean>();

  constructor() {
  }

  @HostBinding('class.highlighted')
  get cssClass() {
    return this.isHighlighted;
  }

  @HostListener('mouseenter')
  onMouseOver() {
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle(){
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }

}
