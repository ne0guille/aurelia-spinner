import { Container, inject, View, ViewEngine, ViewFactory } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { DefaultSpinnerConfig, SpinnerConfig } from './spinner-config';

const containerClass: string = 'spinner-container';
const spinnerClass: string = 'aurelia-spinner';
const spinnerHeight: number = 35;

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

    let blockerContainer: Element = element;
    let spinnerContainer: Element = element;

    if (element.parentElement && this.containsClass(element.parentElement, spinnerClass))
      spinnerContainer = element.parentElement;

    if (element.firstElementChild && this.containsClass(element.firstElementChild, containerClass))
      blockerContainer = element.firstElementChild;

    element.classList.add(containerClass);

    this.addElement(spinnerContainer, view);

    if (this.config.useBackgroundOverlay || self.block) this.toogleBackgroundOverlay(blockerContainer, true);

    return blockerContainer;
  }

  public toogleBackgroundOverlay(target: Element, showSpinner: boolean): void {
    if (target && this.config.blockerClass)
      showSpinner ? target.classList.add(this.config.blockerClass) : target.classList.remove(this.config.blockerClass);
  }

  private addElement(spinnerContainer: Element, view: View): void {
    let spinnerDivElement: HTMLElement = <HTMLElement>document.createElement('div');
    view.appendNodesTo(spinnerDivElement);

    spinnerDivElement = this.setElementStyle(spinnerContainer, spinnerDivElement);

    spinnerContainer.appendChild(spinnerDivElement);
  }

  private setElementStyle(element: Element, htmlElement: HTMLElement): HTMLElement {
    const elementRect: ClientRect = element.getBoundingClientRect();
    const height: number = htmlElement.getBoundingClientRect().height || spinnerHeight;
    const top: string = (elementRect.top + height) > window.innerHeight ? `100px` : `calc(10% - ${spinnerHeight}px)`;

    htmlElement.style.position = 'absolute';
    htmlElement.style.zIndex = '999';
    htmlElement.style.top = top;
    htmlElement.style.left = `calc(50% - ${spinnerHeight}px)`;

    return htmlElement;
  }

  private containsClass(element: Element, className: string) {
    return element.classList.contains(className);
  }
}
