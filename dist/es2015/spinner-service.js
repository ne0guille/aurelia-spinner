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
            const spinnerContainer = this.getSpinnerContainerElement(element, self.isContainer);
            this.addElement(element, spinnerContainer, view);
            const overlayContainer = element.firstElementChild !== null ? element.firstElementChild : element;
            if (this.config.useBackgroundOverlay)
                this.toogleBackgroundOverlay(overlayContainer, true);
            return overlayContainer;
        });
    }
    toogleBackgroundOverlay(target, showSpinner) {
        if (this.config.blockerClass)
            showSpinner ? target.classList.add(this.config.blockerClass) :
                target.classList.remove(this.config.blockerClass);
    }
    addElement(element, container, view) {
        const spinnerDivElement = document.createElement('div');
        view.appendNodesTo(spinnerDivElement);
        const divElement = this.setElementStyle(element, spinnerDivElement);
        container.appendChild(divElement);
    }
    getSpinnerContainerElement(element, isContainer) {
        const spinnerClass = element.classList.toString().split(' ').join('.');
        const selector = `#${element.id}.${spinnerClass}`;
        const container = document.querySelectorAll(selector)[0];
        let spinnerContainer = container;
        if (!isContainer && container.parentElement !== null)
            spinnerContainer = container.parentElement;
        else if (!isContainer && container.firstElementChild !== null)
            spinnerContainer = container.firstElementChild;
        console.log(spinnerContainer);
        spinnerContainer.classList.add('spinner-container');
        return spinnerContainer;
    }
    setElementStyle(element, htmlElement) {
        const elementRect = element.getBoundingClientRect();
        const height = elementRect.height;
        let top = elementRect.top + height;
        console.log('top' + top);
        console.log('height' + height);
        const isOverflow = height > window.innerHeight;
        top = isOverflow ? (elementRect.top - height + window.scrollY) : (height / 2);
        if (top > 50)
            top -= spinnerHeight;
        console.log(top);
        htmlElement.style.position = 'absolute';
        htmlElement.style.zIndex = '999';
        htmlElement.style.top = isOverflow ? `${top}px` : `calc(50% - 65px)`;
        htmlElement.style.left = `calc(50% - 35px)`;
        return htmlElement;
    }
};
SpinnerService = __decorate([
    inject(Container, ViewEngine, 'spinner-config')
], SpinnerService);
export { SpinnerService };
