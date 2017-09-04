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
import { bindable, bindingMode, inject, TaskQueue } from 'aurelia-framework';
import { SpinnerService } from './spinner-service';
let SpinnerCustomAttribute = class SpinnerCustomAttribute {
    constructor(element, taskQueue, spinnerService) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.spinnerService = spinnerService;
        this.show = false;
        this.view = undefined;
        this.block = false;
        this.color = undefined;
    }
    bind() {
        this.view = this.view || this.spinnerService.config.spinner;
        this.block = !!(this.block || this.spinnerService.config.useBackgroundOverlay);
        this.color = this.color || this.spinnerService.config.color;
        if (!this.view)
            throw new Error('no view has been specified for the spinner');
    }
    attached() {
        this.taskQueue.queueTask(() => __awaiter(this, void 0, void 0, function* () { return this.target = yield this.spinnerService.createSpinner(this.element, this); }));
    }
    showChanged(newValue) {
        if (!this.target || !this.block)
            return;
        this.spinnerService.toogleBackgroundOverlay(this.target, newValue);
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
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], SpinnerCustomAttribute.prototype, "color", void 0);
SpinnerCustomAttribute = __decorate([
    inject(Element, TaskQueue, SpinnerService)
], SpinnerCustomAttribute);
export { SpinnerCustomAttribute };
