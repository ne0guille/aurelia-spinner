import { autoinject, bindable, bindingMode, Container, View, ViewEngine, computedFrom } from 'aurelia-framework';
import { DOM } from 'aurelia-pal';

import { SpinnerConfig, spinnerView } from "./spinner-config";

@autoinject
export class SpinnerCustomAttribute {
  private divElement: HTMLElement;
  private target: Element;
  private readonly spinnerHtml: string = './aurelia-spinner.html';
  private config: SpinnerConfig;
  private _view: string;

  @bindable({ defaultBindingMode: bindingMode.oneWay }) show: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) view: string = undefined;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) block: boolean = false;

  static defaultConfig: SpinnerConfig = {
    view: "src/views/circle.html", //spinnerView.circle
    useBackgroundBlocker: false,
    blockerClass: 'spinner-blocker'
  };

  constructor(private element: Element,
    private container: Container,
    private viewEngine: ViewEngine,
    private spinnerConfig: 'spinner-config') {
    this.config = Object.assign({}, SpinnerCustomAttribute.defaultConfig);
    console.log(this.config);
    console.log(this.config.blockerClass);
    console.log(this.spinnerConfig);
  }

  bind() {
    this.view = this.view || this.config.view;
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

  viewChanged(newValue: string) {
    if(!newValue) this._view = this.config.view;
    
    console.log(this.view);
    console.log(spinnerView[newValue]);
    console.log(newValue);
    
    this._view = spinnerView[newValue];
  }

  private createSpinner(): void {
    this.viewEngine.loadViewFactory(this.spinnerHtml).then(factory => {
      const childContainer = this.container.createChild();
      const view = factory.create(childContainer);
      view.bind(this);

      this.addElement(view);
    });
  }

  private removeSpinner(): void {
    const removeSpinner = DOM.querySelectorAll(`#${this.element.id}`)[0];
    removeSpinner.removeChild(this.divElement);
  }

  private addElement(view: View): void {
    const container = DOM.querySelectorAll(`#${this.element.id}`)[0];

    const spinnerDivElement = <HTMLElement>DOM.createElement('div');
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
