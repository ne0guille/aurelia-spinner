import { inject, Container, View, ViewEngine } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { DefaultSpinnerConfig, SpinnerConfig } from "./spinner-config";

const spinnerHeight = 35;

@inject(Container, ViewEngine, 'spinner-config')
export class SpinnerService {
  private readonly spinnerHtml: string = PLATFORM.moduleName('aurelia-spinner/dist/views/spinner.html');
  public config: SpinnerConfig = new DefaultSpinnerConfig();

  constructor(private container: Container,
    private viewEngine: ViewEngine,
    private spinnerConfig: SpinnerConfig) {
    if (spinnerConfig) this.config = Object.freeze({ ...this.config, ...this.spinnerConfig });
  }

  public async createSpinner(element: Element, self: any): Promise<Element> {
    const factory = await this.viewEngine.loadViewFactory(this.spinnerHtml);
    const childContainer: Container = this.container.createChild();
    const view: View = factory.create(childContainer);

    view.bind(self);

    const spinnerContainer = this.getSpinnerContainerElement(element, self.isComponent);
    const overlayContainer = self.isComponent && element.firstElementChild !== null ? element.firstElementChild : element;
    console.log(overlayContainer);
    this.addElement(element, spinnerContainer, view);

    if (this.config.useBackgroundOverlay) this.toogleBackgroundOverlay(overlayContainer, true);

    return overlayContainer;
  }

  public toogleBackgroundOverlay(target: Element, showSpinner: boolean) {
    if (target && this.config.blockerClass)
      showSpinner ? target.classList.add(this.config.blockerClass) :
        target.classList.remove(this.config.blockerClass);
  }

  private addElement(element: Element, container: Element, view: View): void {
    const spinnerDivElement: HTMLElement = <HTMLElement>document.createElement('div');

    view.appendNodesTo(spinnerDivElement);

    const divElement = this.setElementStyle(element, spinnerDivElement);

    container.appendChild(divElement);
  }

  private getSpinnerContainerElement(element: Element, isContainer: boolean): Element {
    const spinnerClass: string = element.classList.toString().split(' ').join('.');
    const selector: string = `#${element.id}.${spinnerClass}`;
    const container: Element = document.querySelectorAll(selector)[0];

    const isCustomElement: boolean = isContainer || this.isCustomElement(container.tagName);

    const spinnerContainer = isCustomElement && container.firstElementChild ?
      container.firstElementChild : container;
    //todo check use parent?
    // if (!isCustomElement && container.parentElement !== null)
    //   spinnerContainer = container.parentElement;
    // else if (!isCustomElement && container.firstElementChild !== null)
    //   spinnerContainer = container.firstElementChild;

    spinnerContainer.classList.add('spinner-container');

    return spinnerContainer;
  }

  private isCustomElement(tagName: string) {
    return tagName.includes('-');
  }

  private setElementStyle(element: Element, htmlElement: HTMLElement): HTMLElement {
    const elementRect: ClientRect = element.getBoundingClientRect();
    const height = elementRect.height;
    let top: number = elementRect.top + height;
    console.log(elementRect);
    const isOverflow = height > window.innerHeight;

    top = isOverflow ? (elementRect.top - height + window.scrollY) : (height / 2);

    if (top > 50) top -= spinnerHeight;

    console.log(top);

    htmlElement.style.position = 'absolute';
    htmlElement.style.zIndex = '999';
    htmlElement.style.top = isOverflow ? `${top}px` : `calc(50% - 65px)`;
    htmlElement.style.left = `calc(50% - 35px)`;

    return htmlElement;
  }
}