import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {

  visible: boolean = false;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  @Input()
  set ngxUnless(condition: any) {
    if (!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef)
      this.visible = true;
    } else if (condition && this.visible) {
      this.viewContainer.clear()
      this.visible = false;
    }
  }
}
