var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Container, inject, ViewEngine } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { DefaultSpinnerConfig } from './spinner-config';
const containerClass = 'spinner-container';
const spinnerClass = 'aurelia-spinner';
const spinnerHeight = 35;
let SpinnerService = class SpinnerService {
    constructor(container, viewEngine, spinnerConfig) {
        this.container = container;
        this.viewEngine = viewEngine;
        this.spinnerConfig = spinnerConfig;
        this.spinnerHtml = PLATFORM.moduleName('aurelia-spinner/dist/views/spinner.html');
        this.config = new DefaultSpinnerConfig();
        if (spinnerConfig)
            this.config = Object.freeze(Object.assign({}, this.config, this.spinnerConfig));
    }
    createSpinner(element, self) {
        return __awaiter(this, void 0, void 0, function* () {
            const factory = yield this.viewEngine.loadViewFactory(this.spinnerHtml);
            const childContainer = this.container.createChild();
            const view = factory.create(childContainer);
            view.bind(self);
            let blockerContainer = element;
            let spinnerContainer = element;
            if (element.parentElement && this.containsClass(element.parentElement, spinnerClass))
                spinnerContainer = element.parentElement;
            if (element.firstElementChild && this.containsClass(element.firstElementChild, containerClass))
                blockerContainer = element.firstElementChild;
            element.classList.add(containerClass);
            this.addElement(spinnerContainer, view);
            if (this.config.useBackgroundOverlay || self.block)
                this.toogleBackgroundOverlay(blockerContainer, true);
            return blockerContainer;
        });
    }
    toogleBackgroundOverlay(target, showSpinner) {
        if (target && this.config.blockerClass)
            showSpinner ? target.classList.add(this.config.blockerClass) : target.classList.remove(this.config.blockerClass);
    }
    addElement(spinnerContainer, view) {
        let spinnerDivElement = document.createElement('div');
        view.appendNodesTo(spinnerDivElement);
        spinnerDivElement = this.setElementStyle(spinnerContainer, spinnerDivElement);
        spinnerContainer.appendChild(spinnerDivElement);
    }
    setElementStyle(element, htmlElement) {
        const elementRect = element.getBoundingClientRect();
        const height = htmlElement.getBoundingClientRect().height || spinnerHeight;
        const top = (elementRect.top + height) > window.innerHeight ? `100px` : `calc(10% - ${spinnerHeight}px)`;
        htmlElement.style.position = 'absolute';
        htmlElement.style.zIndex = '999';
        htmlElement.style.top = top;
        htmlElement.style.left = `calc(50% - ${spinnerHeight}px)`;
        return htmlElement;
    }
    containsClass(element, className) {
        return element.classList.contains(className);
    }
};
SpinnerService = __decorate([
    inject(Container, ViewEngine, 'spinner-config')
], SpinnerService);
export { SpinnerService };
