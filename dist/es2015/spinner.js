var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject, bindable, bindingMode } from 'aurelia-framework';
import { SpinnerService } from "./spinner-service";
let SpinnerCustomAttribute = class SpinnerCustomAttribute {
    // @bindable({ defaultBindingMode: bindingMode.oneTime }) isComponent: boolean = false;
    constructor(element, spinnerService) {
        this.element = element;
        this.spinnerService = spinnerService;
        this.show = false;
        this.view = undefined;
        this.block = false;
    }
    bind() {
        this.view = this.view || this.spinnerService.config.spinner;
        this.block = !!(this.block || this.spinnerService.config.useBackgroundOverlay);
        if (!this.view)
            throw new Error("no view has been specified for the spinner");
    }
    attached() {
        this.spinnerService.createSpinner(this.element, this)
            .then((target) => this.target = target);
    }
    showChanged(showSpinner) {
        if (!this.target || !this.block)
            return;
        this.spinnerService.toogleBackgroundOverlay(this.target, showSpinner);
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay })
], SpinnerCustomAttribute.prototype, "show", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], SpinnerCustomAttribute.prototype, "view", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], SpinnerCustomAttribute.prototype, "block", void 0);
SpinnerCustomAttribute = __decorate([
    inject(Element, SpinnerService)
], SpinnerCustomAttribute);
export { SpinnerCustomAttribute };
