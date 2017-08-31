import { Container, ViewEngine } from 'aurelia-framework';
import { SpinnerConfig } from './spinner-config';
export declare class SpinnerService {
    private container;
    private viewEngine;
    private spinnerConfig;
    private readonly spinnerHtml;
    config: SpinnerConfig;
    constructor(container: Container, viewEngine: ViewEngine, spinnerConfig: SpinnerConfig);
    createSpinner(element: Element, self: any): Promise<Element>;
    toogleBackgroundOverlay(target: Element, showSpinner: boolean): void;
    private addElement(spinnerContainer, view);
    private setElementStyle(element, htmlElement);
    private containsClass(element, className);
}
