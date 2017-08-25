"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_pal_1 = require("aurelia-pal");
var SpinnerCustomAttribute = (function () {
    function SpinnerCustomAttribute(element, container, viewEngine, spinnerConfig) {
        this.element = element;
        this.container = container;
        this.viewEngine = viewEngine;
        this.spinnerConfig = spinnerConfig;
        this.spinnerHtml = aurelia_pal_1.PLATFORM.moduleName('spinner.html');
        this._view = aurelia_pal_1.PLATFORM.moduleName('views/circle.html');
        this.show = false;
        this.view = undefined;
        this.block = false;
        this.config = Object.assign({}, SpinnerCustomAttribute_1.defaultConfig);
        console.log(this.config);
        console.log(this.config.blockerClass);
        console.log(this.spinnerConfig);
        if (this.spinnerConfig.spinner)
            this.config = Object.assign({}, this.spinnerConfig);
    }
    SpinnerCustomAttribute_1 = SpinnerCustomAttribute;
    SpinnerCustomAttribute.prototype.bind = function () {
        this.view = this.view || this.spinnerConfig.spinner;
        this.block = this.block || this.config.useBackgroundBlocker;
        if (!this.view)
            throw new Error("no view has been specified for the spinner");
    };
    SpinnerCustomAttribute.prototype.attached = function () {
        this.createSpinner();
    };
    SpinnerCustomAttribute.prototype.showChanged = function (showSpinner) {
        if (!this.target && !this.block)
            return;
        showSpinner ? this.target.classList.add(this.config.blockerClass) :
            this.target.classList.remove(this.config.blockerClass);
    };
    // viewChanged(newValue: string) {
    //   if(!newValue) this._view = this.config.view;
    //   console.log(this.view);
    //   console.log(spinnerView[newValue]);
    //   console.log(newValue);
    //   this._view = spinnerView[newValue];
    // }
    SpinnerCustomAttribute.prototype.createSpinner = function () {
        var _this = this;
        console.log("createSpinner ");
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
        console.log(view);
        var container = document.querySelectorAll("#" + this.element.id)[0];
        var spinnerDivElement = document.createElement('div');
        view.appendNodesTo(spinnerDivElement);
        this.target = this.element.firstElementChild || this.element;
        this.divElement = this.setElementStyle(this.element, spinnerDivElement);
        if (this.block)
            this.target.classList.add(this.config.blockerClass);
        container.insertBefore(this.divElement, container.firstChild);
    };
    // todo fix too recalculate element height
    SpinnerCustomAttribute.prototype.setElementStyle = function (element, htmlElement) {
        var elementRect = element.getBoundingClientRect();
        var height = htmlElement.getBoundingClientRect().height;
        var top = elementRect.top + elementRect.height;
        top = ((top + height) < window.innerHeight) ? top + window.scrollY : (elementRect.top - height + window.scrollY);
        htmlElement.style.position = 'absolute';
        htmlElement.style.zIndex = '999';
        htmlElement.style.height = "calc(100% - " + top + "px)";
        htmlElement.style.top = top + "px";
        htmlElement.style.left = "calc(50% - 35px)";
        return htmlElement;
    };
    SpinnerCustomAttribute.defaultConfig = {
        spinner: aurelia_pal_1.PLATFORM.moduleName('views/circle.html'),
        useBackgroundBlocker: false,
        blockerClass: 'spinner-blocker'
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
    SpinnerCustomAttribute = SpinnerCustomAttribute_1 = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.Container, aurelia_framework_1.ViewEngine, 'spinner-config')
    ], SpinnerCustomAttribute);
    return SpinnerCustomAttribute;
    var SpinnerCustomAttribute_1;
}());
exports.SpinnerCustomAttribute = SpinnerCustomAttribute;

//# sourceMappingURL=spinner.js.map
