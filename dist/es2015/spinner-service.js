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
import { inject, Container, ViewEngine } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { DefaultSpinnerConfig } from "./spinner-config";
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
            const spinnerContainer = this.getSpinnerContainerElement(element);
            this.addElement(element, spinnerContainer, view);
            if (this.config.useBackgroundOverlay)
                this.toogleBackgroundOverlay(element, true);
            return element;
        });
    }
    toogleBackgroundOverlay(target, showSpinner) {
        // tslint:disable-next-line:curly
        if (target && this.config.blockerClass)
            showSpinner ? target.classList.add(this.config.blockerClass) :
                target.classList.remove(this.config.blockerClass);
    }
    addElement(element, container, view) {
        let spinnerDivElement = document.createElement('div');
        view.appendNodesTo(spinnerDivElement);
        spinnerDivElement = this.setElementStyle(element, spinnerDivElement);
        // container.appendChild(spinnerDivElement);
        container.insertBefore(spinnerDivElement, container.firstChild);
    }
    getSpinnerContainerElement(element) {
        const spinnerClass = element.classList.toString().split(' ').join('.');
        const selector = `#${element.id}.${spinnerClass}`;
        const container = document.querySelectorAll(selector)[0];
        const spinnerContainer = container.parentElement ? container.parentElement : container;
        spinnerContainer.classList.add('spinner-container');
        return spinnerContainer;
    }
    setElementStyle(element, htmlElement) {
        const elementRect = element.getBoundingClientRect();
        const height = elementRect.height;
        const isOverflow = height > window.innerHeight;
        const top = isOverflow ? 30 : 50;
        htmlElement.style.position = 'absolute';
        htmlElement.style.zIndex = '999';
        htmlElement.style.top = `calc(${top}% - 65px)`;
        htmlElement.style.left = `calc(50% - 35px)`;
        return htmlElement;
    }
};
SpinnerService = __decorate([
    inject(Container, ViewEngine, 'spinner-config')
], SpinnerService);
export { SpinnerService };
