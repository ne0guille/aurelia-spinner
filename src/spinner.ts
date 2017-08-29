import { inject, bindable, bindingMode } from 'aurelia-framework';

import { SpinnerService } from "./spinner-service";

@inject(Element, SpinnerService)
export class SpinnerCustomAttribute {
  private target: Element;

  @bindable({ defaultBindingMode: bindingMode.oneWay }) show: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) view?: string = undefined;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) block: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) isComponent: boolean = false;
  
  constructor(private element: Element,
    private spinnerService: SpinnerService) { }

  bind() {
    this.view = this.view || this.spinnerService.config.spinner;
    this.block = !!(this.block || this.spinnerService.config.useBackgroundOverlay);

    if (!this.view) throw new Error("no view has been specified for the spinner");
  }

  attached() {
    this.spinnerService.createSpinner(this.element, this)
    .then((target: Element) => this.target = target);
  }

  showChanged(showSpinner: boolean) {
    if (!this.target || !this.block) return;
    
    this.spinnerService.toogleBackgroundOverlay(this.target, showSpinner);
  }
}