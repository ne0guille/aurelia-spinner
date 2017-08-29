import { inject, bindable, bindingMode } from 'aurelia-framework';

import { SpinnerConfig } from "./spinner-config";
import { SpinnerService } from "./spinner-service";

@inject(Element, SpinnerService, 'spinner-config')
export class SpinnerCustomAttribute {
  private target: Element;

  @bindable({ defaultBindingMode: bindingMode.oneWay }) show: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) view?: string = undefined;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) block: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) isContainer: boolean = false;
  
  constructor(private element: Element,
    private spinnerService: SpinnerService,
    private spinnerConfig: SpinnerConfig) {
    // if (spinnerConfig) this.config = Object.freeze({ ...this.config, ...this.spinnerConfig });        
  }

  bind() {
    this.view = this.view || this.spinnerConfig.spinner;
    this.block = this.block === undefined ? !!this.spinnerConfig.useBackgroundOverlay : this.block;

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