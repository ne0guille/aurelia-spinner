System.register(["aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, blockerClass, DefaultSpinnerConfig, spinnerViews;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            blockerClass = 'spinner-blocker';
            DefaultSpinnerConfig = (function () {
                function DefaultSpinnerConfig() {
                    this.spinner = undefined;
                    this.useBackgroundOverlay = false;
                    this.blockerClass = blockerClass;
                }
                return DefaultSpinnerConfig;
            }());
            exports_1("DefaultSpinnerConfig", DefaultSpinnerConfig);
            exports_1("spinnerViews", spinnerViews = {
                chasingDots: aurelia_framework_1.PLATFORM.moduleName('aurelia-spinner/dist/views/chasing-dots.html'),
                circle: aurelia_framework_1.PLATFORM.moduleName('aurelia-spinner/dist/views/circle.html'),
                cubeGrid: aurelia_framework_1.PLATFORM.moduleName('aurelia-spinner/dist/views/cube-grid.html'),
                doubleBounce: aurelia_framework_1.PLATFORM.moduleName('aurelia-spinner/dist/views/double-bounce.html'),
                fadingCircle: aurelia_framework_1.PLATFORM.moduleName('aurelia-spinner/dist/views/fading-circle.html'),
                foldingCube: aurelia_framework_1.PLATFORM.moduleName('aurelia-spinner/dist/views/folding-cube.html'),
                pulse: aurelia_framework_1.PLATFORM.moduleName('aurelia-spinner/dist/views/pulse.html'),
                rotatingPlane: aurelia_framework_1.PLATFORM.moduleName('aurelia-spinner/dist/views/rotating-plane.html'),
                threeBounce: aurelia_framework_1.PLATFORM.moduleName('aurelia-spinner/dist/views/three-bounce.html'),
                wanderingCubes: aurelia_framework_1.PLATFORM.moduleName('aurelia-spinner/dist/views/wandering-cubes.html'),
                wave: aurelia_framework_1.PLATFORM.moduleName('aurelia-spinner/dist/views/wave.html')
            });
        }
    };
});
