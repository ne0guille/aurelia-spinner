import { inject, bindable, bindingMode, Container, View, ViewEngine } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { SpinnerConfig, spinnerViews } from "./spinner-config";

@inject(Element, Container, ViewEngine, 'spinner-config')
export class SpinnerCustomAttribute {
  private divElement: HTMLElement;
  private target: Element;
  private readonly spinnerHtml: string = PLATFORM.moduleName('aurelia-spinner/dist/spinner.html');
  private config: SpinnerConfig = new SpinnerConfig();

  @bindable({ defaultBindingMode: bindingMode.oneWay }) show: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) view: string = undefined;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) block: boolean = undefined;

  constructor(private element: Element,
    private container: Container,
    private viewEngine: ViewEngine,
    private spinnerConfig: SpinnerConfig) {
    if (spinnerConfig) this.config = Object.freeze({ ...this.config, ...this.spinnerConfig });
  }

  bind() {
    this.view = this.view || this.config.spinner;
    this.block = this.block === undefined ? this.config.useBackgroundBlocker : this.block;

    if (!this.view) throw new Error("no view has been specified for the spinner");
  }

  attached() {
    this.createSpinner();
  }

  showChanged(showSpinner: boolean) {
    if (!this.target || !this.block) return;

    showSpinner ? this.target.classList.add(this.config.blockerClass) :
      this.target.classList.remove(this.config.blockerClass);
  }

  private createSpinner(): void {
    this.viewEngine.loadViewFactory(this.spinnerHtml).then(factory => {
      const childContainer: Container = this.container.createChild();
      const view: View = factory.create(childContainer);
      view.bind(this);

      this.addElement(view);
    });
  }

  private removeSpinner(): void {
    const removeSpinner: Element = document.querySelectorAll(`#${this.element.id}`)[0];
    removeSpinner.removeChild(this.divElement);
  }

  private addElement(view: View): void {
    const container: Element = document.querySelectorAll(`#${this.element.id}`)[0];
    const spinnerDivElement: HTMLElement = <HTMLElement>document.createElement('div');

    view.appendNodesTo(spinnerDivElement);

    this.target = this.element.children.length === 1 ? this.element.firstElementChild : this.element;
    this.divElement = this.setElementStyle(this.element, spinnerDivElement);
    if (this.block) this.target.classList.add(this.config.blockerClass);

    container.firstElementChild.appendChild(this.divElement);
  }

  private setElementStyle(element: any, htmlElement: HTMLElement): HTMLElement {
    element.style.position = 'relative';
    htmlElement.style.position = 'absolute';
    htmlElement.style.zIndex = '999';
    htmlElement.style.top = 'calc(50% - 65px)';
    htmlElement.style.left = 'calc(50% - 35px)';

    return htmlElement;
  }

}
