import { PLATFORM } from "aurelia-framework";

export class SpinnerConfig {
  spinner: string;
  useBackgroundBlocker?: boolean;
  blockerClass?: string;
}

export const spinnerViews = {
  chasingDots: PLATFORM.moduleName('aurelia-spinner/dist/views/chasing-dots.html'),
  circle: PLATFORM.moduleName('aurelia-spinner/dist/views/circle.html'),
  cubeGrid: PLATFORM.moduleName('aurelia-spinner/dist/views/cube-grid.html'),
  doubleBounce: PLATFORM.moduleName('aurelia-spinner/dist/views/double-bounce.html'),
  fadingCircle: PLATFORM.moduleName('aurelia-spinner/dist/views/fading-circle.html'),
  pulse: PLATFORM.moduleName('aurelia-spinner/dist/views/pulse.html'),
  rotatingPlane: PLATFORM.moduleName('aurelia-spinner/dist/views/rotating-plane.html'),
  threeBounce: PLATFORM.moduleName('aurelia-spinner/dist/views/three-bounce.html'),
  wanderingCubes: PLATFORM.moduleName('aurelia-spinner/dist/views/wandering-cubes.html'),
  wave: PLATFORM.moduleName('aurelia-spinner/dist/views/wave.html')
}

export const blockerClass = 'spinner-blocker';
