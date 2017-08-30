var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "./spinner-service"], function (require, exports, aurelia_framework_1, spinner_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpinnerCustomAttribute = (function () {
        // @bindable({ defaultBindingMode: bindingMode.oneTime }) isComponent: boolean = false;
        function SpinnerCustomAttribute(element, spinnerService) {
            this.element = element;
            this.spinnerService = spinnerService;
            this.show = false;
            this.view = undefined;
            this.block = false;
        }
        SpinnerCustomAttribute.prototype.bind = function () {
            this.view = this.view || this.spinnerService.config.spinner;
            this.block = !!(this.block || this.spinnerService.config.useBackgroundOverlay);
            if (!this.view)
                throw new Error("no view has been specified for the spinner");
        };
        SpinnerCustomAttribute.prototype.attached = function () {
            var _this = this;
            this.spinnerService.createSpinner(this.element, this)
                .then(function (target) { return _this.target = target; });
        };
        SpinnerCustomAttribute.prototype.showChanged = function (showSpinner) {
            if (!this.target || !this.block)
                return;
            this.spinnerService.toogleBackgroundOverlay(this.target, showSpinner);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay })
        ], SpinnerCustomAttribute.prototype, "show", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
        ], SpinnerCustomAttribute.prototype, "view", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
        ], SpinnerCustomAttribute.prototype, "block", void 0);
        SpinnerCustomAttribute = __decorate([
            aurelia_framework_1.inject(Element, spinner_service_1.SpinnerService)
        ], SpinnerCustomAttribute);
        return SpinnerCustomAttribute;
    }());
    exports.SpinnerCustomAttribute = SpinnerCustomAttribute;
});
