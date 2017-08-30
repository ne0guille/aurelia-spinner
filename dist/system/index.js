System.register(["aurelia-pal", "./spinner-config"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(config, spinnerConfig) {
        config.globalResources(aurelia_pal_1.PLATFORM.moduleName('./spinner'));
        config.container.registerInstance('spinner-config', spinnerConfig);
    }
    exports_1("configure", configure);
    var aurelia_pal_1;
    return {
        setters: [
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (spinner_config_1_1) {
                exports_1({
                    "spinnerViews": spinner_config_1_1["spinnerViews"]
                });
            }
        ],
        execute: function () {
        }
    };
});
