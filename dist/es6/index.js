"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pal_1 = require("aurelia-pal");
var spinner_config_1 = require("./spinner-config");
exports.SpinnerConfig = spinner_config_1.SpinnerConfig;
exports.spinnerViews = spinner_config_1.spinnerViews;
function configure(config, spinnerConfig) {
    config.globalResources(aurelia_pal_1.PLATFORM.moduleName('./spinner'));
    config.container.registerInstance('spinner-config', spinnerConfig);
}
exports.configure = configure;

//# sourceMappingURL=index.js.map
