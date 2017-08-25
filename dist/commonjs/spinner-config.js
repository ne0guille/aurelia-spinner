"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var SpinnerConfig = function () {
    function SpinnerConfig() {}
    return SpinnerConfig;
}();
exports.SpinnerConfig = SpinnerConfig;

exports.spinnerView = {
    chasingDots: aurelia_framework_1.PLATFORM.moduleName('views/chasing-dots.html'),
    circle: aurelia_framework_1.PLATFORM.moduleName('views/circle.html'),
    cubeGrid: aurelia_framework_1.PLATFORM.moduleName('views/cube-grid.html'),
    doubleBounce: aurelia_framework_1.PLATFORM.moduleName('views/double-bounce.html'),
    fadingCircle: aurelia_framework_1.PLATFORM.moduleName('views/fading-circle.html'),
    pulse: aurelia_framework_1.PLATFORM.moduleName('views/pulse.html'),
    rotatingPlane: aurelia_framework_1.PLATFORM.moduleName('views/rotating-plane.html'),
    threeBounce: aurelia_framework_1.PLATFORM.moduleName('views/three-bounce.html'),
    wanderingCubes: aurelia_framework_1.PLATFORM.moduleName('views/wandering-cubes.html'),
    wave: aurelia_framework_1.PLATFORM.moduleName('views/wave.html')
};
//# sourceMappingURL=spinner-config.js.map
