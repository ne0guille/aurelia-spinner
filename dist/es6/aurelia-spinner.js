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
var blockClass = 'spinner-blocker';
var SpinnerCustomAttribute = (function () {
    function SpinnerCustomAttribute(element, container, viewEngine) {
        this.element = element;
        this.container = container;
        this.viewEngine = viewEngine;
        this.spinnerView = './aurelia-spinner.html';
        this.show = false;
        this.view = this.spinnerView;
        this.block = true;
    }
    SpinnerCustomAttribute.prototype.attached = function () {
        this.createSpinner();
    };
    SpinnerCustomAttribute.prototype.showChanged = function (showSpinner) {
        if (!this.target)
            return;
        showSpinner ? this.target.classList.add(blockClass) : this.target.classList.remove(blockClass);
    };
    SpinnerCustomAttribute.prototype.createSpinner = function () {
        var _this = this;
        this.viewEngine.loadViewFactory(this.view).then(function (factory) {
            var childContainer = _this.container.createChild();
            var view = factory.create(childContainer);
            view.bind(_this);
            _this.addElement(view);
        });
    };
    SpinnerCustomAttribute.prototype.removeSpinner = function () {
        var removeSpinner = aurelia_pal_1.DOM.querySelectorAll("#" + this.element.id)[0];
        removeSpinner.removeChild(this.divElement);
    };
    SpinnerCustomAttribute.prototype.addElement = function (view) {
        var container = aurelia_pal_1.DOM.querySelectorAll("#" + this.element.id)[0];
        var spinnerDivElement = aurelia_pal_1.DOM.createElement('div');
        view.appendNodesTo(spinnerDivElement);
        this.target = this.element.firstElementChild || this.element;
        this.divElement = this.setElementStyle(this.element, spinnerDivElement);
        if (this.block)
            this.target.classList.add(blockClass);
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
        aurelia_framework_1.autoinject
    ], SpinnerCustomAttribute);
    return SpinnerCustomAttribute;
}());
exports.SpinnerCustomAttribute = SpinnerCustomAttribute;

//# sourceMappingURL=aurelia-spinner.js.map
