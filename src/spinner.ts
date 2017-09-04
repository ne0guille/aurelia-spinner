import { bindable, bindingMode, inject, TaskQueue } from 'aurelia-framework';

import { SpinnerService } from './spinner-service';

@inject(Element, TaskQueue, SpinnerService)
export class SpinnerCustomAttribute {
  private target: Element;

  @bindable({ defaultBindingMode: bindingMode.oneWay }) show: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) view?: string = undefined;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) block: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) color?: string = undefined;

  constructor(private element: Element,
    private taskQueue: TaskQueue,
    private spinnerService: SpinnerService) { }

  bind() {
    this.view = this.view || this.spinnerService.config.spinner;
    this.block = !!(this.block || this.spinnerService.config.useBackgroundOverlay);
    this.color = this.color || this.spinnerService.config.color;

    if (!this.view) throw new Error('no view has been specified for the spinner');
  }

  attached() {
    this.taskQueue.queueTask(async () => this.target = await this.spinnerService.createSpinner(this.element, this));
}

showChanged(newValue: boolean) {
  if (!this.target || !this.block) return;

  this.spinnerService.toogleBackgroundOverlay(this.target, newValue);
}
}
