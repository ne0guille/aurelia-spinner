import { inject, bindable, bindingMode, Container, View, ViewEngine } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { SpinnerConfig } from "./spinner-config";

@inject(Element, Container, ViewEngine, 'spinner-config')
export class SpinnerCustomAttribute {
  private divElement: HTMLElement;
  private target: Element;
  private readonly spinnerHtml: string = PLATFORM.moduleName('spinner.html');
  private config: SpinnerConfig;
  private _view: string = PLATFORM.moduleName('views/circle.html');

  @bindable({ defaultBindingMode: bindingMode.oneWay }) show: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) view: string = undefined;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) block: boolean = false;

  static defaultConfig: SpinnerConfig = {
    spinner: PLATFORM.moduleName('views/circle.html'),
    useBackgroundBlocker: false,
    blockerClass: 'spinner-blocker'
  };

  constructor(private element,
    private container,
    private viewEngine,
    private spinnerConfig
  ) {
    this.config = Object.assign({}, SpinnerCustomAttribute.defaultConfig);
    console.log(this.config);
    console.log(this.config.blockerClass);
    console.log(this.spinnerConfig);
    if(this.spinnerConfig.spinner)
      this.config = Object.assign({}, this.spinnerConfig);
  }

  bind() {
    this.view = this.view ||  this.spinnerConfig.spinner;
    this.block = this.block || this.config.useBackgroundBlocker;

    if (!this.view) throw new Error("no view has been specified for the spinner");
  }

  attached() {
    this.createSpinner();
  }

  showChanged(showSpinner: boolean) {
    if (!this.target && !this.block) return;

    showSpinner ? this.target.classList.add(this.config.blockerClass) :
      this.target.classList.remove(this.config.blockerClass);
  }

  // viewChanged(newValue: string) {
  //   if(!newValue) this._view = this.config.view;

  //   console.log(this.view);
  //   console.log(spinnerView[newValue]);
  //   console.log(newValue);

  //   this._view = spinnerView[newValue];
  // }

  private createSpinner(): void {
    console.log("createSpinner ");

    this.viewEngine.loadViewFactory(this.spinnerHtml).then(factory => {
      const childContainer = this.container.createChild();
      const view = factory.create(childContainer);
      view.bind(this);

      this.addElement(view);
    });
  }

  private removeSpinner(): void {
    const removeSpinner = document.querySelectorAll(`#${this.element.id}`)[0];
    removeSpinner.removeChild(this.divElement);
  }

  private addElement(view: View): void {
    console.log(view);
    const container = document.querySelectorAll(`#${this.element.id}`)[0];

    const spinnerDivElement = <HTMLElement>document.createElement('div');
    view.appendNodesTo(spinnerDivElement);

    this.target = this.element.firstElementChild || this.element;

    this.divElement = this.setElementStyle(this.element, spinnerDivElement);

    if (this.block) this.target.classList.add(this.config.blockerClass);

    container.insertBefore(this.divElement, container.firstChild);
  }

  // todo fix too recalculate element height
  private setElementStyle(element: Element, htmlElement: HTMLElement): HTMLElement {
    const elementRect = element.getBoundingClientRect();
    const height = htmlElement.getBoundingClientRect().height;
    let top = elementRect.top + elementRect.height;

    top = ((top + height) < window.innerHeight) ? top + window.scrollY : (elementRect.top - height + window.scrollY);

    htmlElement.style.position = 'absolute';
    htmlElement.style.zIndex = '999';
    htmlElement.style.height = `calc(100% - ${top}px)`;
    htmlElement.style.top = `${top}px`;
    htmlElement.style.left = `calc(50% - 35px)`;

    return htmlElement;
  }

}
