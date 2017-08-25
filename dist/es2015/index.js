"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pal_1 = require("aurelia-pal");
var spinner_config_1 = require("./spinner-config");
exports.SpinnerConfig = spinner_config_1.SpinnerConfig;
exports.spinnerView = spinner_config_1.spinnerView;
function configure(config, spinnerConfig) {
    console.log(spinnerConfig);
    config.globalResources(aurelia_pal_1.PLATFORM.moduleName('./spinner'));
    config.container.registerInstance('spinner-config', spinnerConfig);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map
