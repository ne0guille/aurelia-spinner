var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "aurelia-framework", "aurelia-pal", "./spinner-config"], function (require, exports, aurelia_framework_1, aurelia_pal_1, spinner_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpinnerService = (function () {
        function SpinnerService(container, viewEngine, spinnerConfig) {
            this.container = container;
            this.viewEngine = viewEngine;
            this.spinnerConfig = spinnerConfig;
            this.spinnerHtml = aurelia_pal_1.PLATFORM.moduleName('aurelia-spinner/dist/views/spinner.html');
            this.config = new spinner_config_1.DefaultSpinnerConfig();
            if (spinnerConfig)
                this.config = Object.freeze(__assign({}, this.config, this.spinnerConfig));
        }
        SpinnerService.prototype.createSpinner = function (element, self) {
            return __awaiter(this, void 0, void 0, function () {
                var factory, childContainer, view, spinnerContainer;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.viewEngine.loadViewFactory(this.spinnerHtml)];
                        case 1:
                            factory = _a.sent();
                            childContainer = this.container.createChild();
                            view = factory.create(childContainer);
                            view.bind(self);
                            spinnerContainer = this.getSpinnerContainerElement(element);
                            console.log(spinnerContainer);
                            this.addElement(element, spinnerContainer, view);
                            if (this.config.useBackgroundOverlay)
                                this.toogleBackgroundOverlay(element, true);
                            return [2 /*return*/, element];
                    }
                });
            });
        };
        SpinnerService.prototype.toogleBackgroundOverlay = function (target, showSpinner) {
            // tslint:disable-next-line:curly
            if (target && this.config.blockerClass)
                showSpinner ? target.classList.add(this.config.blockerClass) :
                    target.classList.remove(this.config.blockerClass);
        };
        SpinnerService.prototype.addElement = function (element, container, view) {
            var spinnerDivElement = document.createElement('div');
            view.appendNodesTo(spinnerDivElement);
            spinnerDivElement = this.setElementStyle(element, spinnerDivElement);
            // container.appendChild(spinnerDivElement);
            container.insertBefore(spinnerDivElement, container.firstChild);
        };
        SpinnerService.prototype.getSpinnerContainerElement = function (element) {
            var spinnerClass = element.classList.toString().split(' ').join('.');
            var selector = "#" + element.id + "." + spinnerClass;
            var container = document.querySelectorAll(selector)[0];
            var spinnerContainer = container.parentElement ? container.parentElement : container;
            spinnerContainer.classList.add('spinner-container');
            return spinnerContainer;
        };
        SpinnerService.prototype.setElementStyle = function (element, htmlElement) {
            var elementRect = element.getBoundingClientRect();
            var height = elementRect.height;
            var top = elementRect.top + height;
            console.log(elementRect);
            var isOverflow = height > window.innerHeight;
            top = isOverflow ? (elementRect.top - height + window.scrollY) : (height / 2);
            var value = isOverflow ? 30 : 50;
            console.log(top);
            htmlElement.style.position = 'absolute';
            htmlElement.style.zIndex = '999';
            htmlElement.style.top = "calc(" + value + "% - 65px)";
            htmlElement.style.left = "calc(50% - 35px)";
            return htmlElement;
        };
        SpinnerService = __decorate([
            aurelia_framework_1.inject(aurelia_framework_1.Container, aurelia_framework_1.ViewEngine, 'spinner-config')
        ], SpinnerService);
        return SpinnerService;
    }());
    exports.SpinnerService = SpinnerService;
});
