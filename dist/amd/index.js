define(["require", "exports", "aurelia-pal", "./spinner-config"], function (require, exports, aurelia_pal_1, spinner_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.spinnerViews = spinner_config_1.spinnerViews;
    function configure(config, spinnerConfig) {
        config.globalResources(aurelia_pal_1.PLATFORM.moduleName('./spinner'));
        config.container.registerInstance('spinner-config', spinnerConfig);
    }
    exports.configure = configure;
});
