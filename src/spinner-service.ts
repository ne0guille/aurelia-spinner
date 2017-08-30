import { inject, Container, View, ViewEngine, ViewFactory } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { DefaultSpinnerConfig, SpinnerConfig } from "./spinner-config";

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
    const factory: ViewFactory = await this.viewEngine.loadViewFactory(this.spinnerHtml);
    const childContainer: Container = this.container.createChild();
    const view: View = factory.create(childContainer);

    view.bind(self);

    const spinnerContainer: Element = this.getSpinnerContainerElement(element);
    this.addElement(element, spinnerContainer, view);

    if (this.config.useBackgroundOverlay) this.toogleBackgroundOverlay(element, true);

    return element;
  }

  public toogleBackgroundOverlay(target: Element, showSpinner: boolean): void {
    // tslint:disable-next-line:curly
    if (target && this.config.blockerClass)
      showSpinner ? target.classList.add(this.config.blockerClass) :
        target.classList.remove(this.config.blockerClass);
  }

  private addElement(element: Element, container: Element, view: View): void {
    let spinnerDivElement: HTMLElement = <HTMLElement>document.createElement('div');

    view.appendNodesTo(spinnerDivElement);

    spinnerDivElement = this.setElementStyle(element, spinnerDivElement);

    // container.appendChild(spinnerDivElement);
    container.insertBefore(spinnerDivElement, container.firstChild);
  }

  private getSpinnerContainerElement(element: Element): Element {
    const spinnerClass: string = element.classList.toString().split(' ').join('.');
    const selector: string = `#${element.id}.${spinnerClass}`;
    const container: Element = document.querySelectorAll(selector)[0];
    const spinnerContainer: Element = container.parentElement ? container.parentElement : container;

    spinnerContainer.classList.add('spinner-container');

    return spinnerContainer;
  }

  private setElementStyle(element: Element, htmlElement: HTMLElement): HTMLElement {
    const elementRect: ClientRect = element.getBoundingClientRect();
    const height: number = elementRect.height;
    const isOverflow: boolean = height > window.innerHeight;
    const top: number = isOverflow ? 30 : 50;

    htmlElement.style.position = 'absolute';
    htmlElement.style.zIndex = '999';
    htmlElement.style.top = `calc(${top}% - 65px)`;
    htmlElement.style.left = `calc(50% - 35px)`;

    return htmlElement;
  }
}