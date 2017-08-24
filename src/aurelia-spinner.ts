import { autoinject, bindable, bindingMode, Container, View, ViewEngine } from 'aurelia-framework';
import { DOM } from 'aurelia-pal';

const blockClass = 'spinner-blocker';

@autoinject
export class SpinnerCustomAttribute {
  private divElement: HTMLElement;
  private target: Element;
  private spinnerView: string = './aurelia-spinner.html';

  @bindable({ defaultBindingMode: bindingMode.oneWay }) show: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) view: string = this.spinnerView;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) block: boolean = true;

  constructor(private element: Element, private container: Container, private viewEngine: ViewEngine) { }

  attached() {
    this.createSpinner();
  }

  showChanged(showSpinner: boolean) {
    if (!this.target && !this.block) return;

    showSpinner ? this.target.classList.add(blockClass) : this.target.classList.remove(blockClass);
  }

  private createSpinner() {
    this.viewEngine.loadViewFactory(this.view).then(factory => {
      const childContainer = this.container.createChild();
      const view = factory.create(childContainer);
      view.bind(this);

      this.addElement(view);
    });
  }

  private removeSpinner() {
    const removeSpinner = DOM.querySelectorAll(`#${this.element.id}`)[0];
    removeSpinner.removeChild(this.divElement);
  }

  private addElement(view: View) {
    const container = DOM.querySelectorAll(`#${this.element.id}`)[0];

    const spinnerDivElement = <HTMLElement>DOM.createElement('div');
    view.appendNodesTo(spinnerDivElement);

    this.target = this.element.firstElementChild || this.element;

    this.divElement = this.setElementStyle(this.element, spinnerDivElement);

    if (this.block) this.target.classList.add(blockClass);

    container.insertBefore(this.divElement, container.firstChild);
  }

  // todo fix too recalculate element height
  private setElementStyle(element: Element, htmlElement: HTMLElement): HTMLElement{
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
