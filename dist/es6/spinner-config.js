"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var SpinnerConfig = (function () {
    function SpinnerConfig() {
    }
    return SpinnerConfig;
}());
exports.SpinnerConfig = SpinnerConfig;
exports.spinnerViews = {
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
};
exports.blockerClass = 'spinner-blocker';

//# sourceMappingURL=spinner-config.js.map
