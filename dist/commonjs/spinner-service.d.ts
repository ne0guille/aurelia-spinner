import { Container, ViewEngine } from 'aurelia-framework';
import { SpinnerConfig } from "./spinner-config";
export declare class SpinnerService {
    private container;
    private viewEngine;
    private spinnerConfig;
    private readonly spinnerHtml;
    config: SpinnerConfig;
    constructor(container: Container, viewEngine: ViewEngine, spinnerConfig: SpinnerConfig);
    createSpinner(element: Element, self: any): Promise<Element>;
    toogleBackgroundOverlay(target: Element, showSpinner: boolean): void;
    private addElement(element, container, view);
    private getSpinnerContainerElement(element, isContainer);
    private setElementStyle(element, htmlElement);
}
