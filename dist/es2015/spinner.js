"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_pal_1 = require("aurelia-pal");
var spinner_config_1 = require("./spinner-config");
var SpinnerCustomAttribute = function () {
    function SpinnerCustomAttribute(element, container, viewEngine, spinnerConfig) {
        this.element = element;
        this.container = container;
        this.viewEngine = viewEngine;
        this.spinnerConfig = spinnerConfig;
        this.spinnerHtml = aurelia_pal_1.PLATFORM.moduleName('aurelia-spinner/dist/spinner.html');
        this.config = new spinner_config_1.SpinnerConfig();
        this.show = false;
        this.view = undefined;
        this.block = undefined;
        if (spinnerConfig) this.config = Object.freeze(__assign({}, this.config, this.spinnerConfig));
    }
    SpinnerCustomAttribute.prototype.bind = function () {
        this.view = this.view || this.config.spinner;
        this.block = this.block === undefined ? this.config.useBackgroundBlocker : this.block;
        if (!this.view) throw new Error("no view has been specified for the spinner");
    };
    SpinnerCustomAttribute.prototype.attached = function () {
        this.createSpinner();
    };
    SpinnerCustomAttribute.prototype.showChanged = function (showSpinner) {
        if (!this.target || !this.block) return;
        showSpinner ? this.target.classList.add(this.config.blockerClass) : this.target.classList.remove(this.config.blockerClass);
    };
    SpinnerCustomAttribute.prototype.createSpinner = function () {
        var _this = this;
        this.viewEngine.loadViewFactory(this.spinnerHtml).then(function (factory) {
            var childContainer = _this.container.createChild();
            var view = factory.create(childContainer);
            view.bind(_this);
            _this.addElement(view);
        });
    };
    SpinnerCustomAttribute.prototype.removeSpinner = function () {
        var removeSpinner = document.querySelectorAll("#" + this.element.id)[0];
        removeSpinner.removeChild(this.divElement);
    };
    SpinnerCustomAttribute.prototype.addElement = function (view) {
        var container = document.querySelectorAll("#" + this.element.id)[0];
        var spinnerDivElement = document.createElement('div');
        view.appendNodesTo(spinnerDivElement);
        this.target = this.element.children.length === 1 ? this.element.firstElementChild : this.element;
        this.divElement = this.setElementStyle(this.element, spinnerDivElement);
        if (this.block) this.target.classList.add(this.config.blockerClass);
        container.firstElementChild.appendChild(this.divElement);
    };
    SpinnerCustomAttribute.prototype.setElementStyle = function (element, htmlElement) {
        element.style.position = 'relative';
        htmlElement.style.position = 'absolute';
        htmlElement.style.zIndex = '999';
        htmlElement.style.top = 'calc(50% - 65px)';
        htmlElement.style.left = 'calc(50% - 35px)';
        return htmlElement;
    };
    __decorate([aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay })], SpinnerCustomAttribute.prototype, "show", void 0);
    __decorate([aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })], SpinnerCustomAttribute.prototype, "view", void 0);
    __decorate([aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })], SpinnerCustomAttribute.prototype, "block", void 0);
    SpinnerCustomAttribute = __decorate([aurelia_framework_1.inject(Element, aurelia_framework_1.Container, aurelia_framework_1.ViewEngine, 'spinner-config')], SpinnerCustomAttribute);
    return SpinnerCustomAttribute;
}();
exports.SpinnerCustomAttribute = SpinnerCustomAttribute;
//# sourceMappingURL=spinner.js.map
