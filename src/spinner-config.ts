import { PLATFORM } from "aurelia-framework";

const blockerClass: string = 'spinner-blocker';

export interface SpinnerConfig {
  spinner?: string;
  useBackgroundOverlay?: boolean;
  blockerClass?: string;
}

export class DefaultSpinnerConfig implements SpinnerConfig {
  spinner?: string = undefined;
  useBackgroundOverlay: boolean = false;
  blockerClass: string = blockerClass;
}

export const spinnerViews = {
  chasingDots: PLATFORM.moduleName('aurelia-spinner/dist/views/chasing-dots.html'),
  circle: PLATFORM.moduleName('aurelia-spinner/dist/views/circle.html'),
  cubeGrid: PLATFORM.moduleName('aurelia-spinner/dist/views/cube-grid.html'),
  doubleBounce: PLATFORM.moduleName('aurelia-spinner/dist/views/double-bounce.html'),
  fadingCircle: PLATFORM.moduleName('aurelia-spinner/dist/views/fading-circle.html'),
  foldingCube: PLATFORM.moduleName('aurelia-spinner/dist/views/folding-cube.html'),
  pulse: PLATFORM.moduleName('aurelia-spinner/dist/views/pulse.html'),
  rotatingPlane: PLATFORM.moduleName('aurelia-spinner/dist/views/rotating-plane.html'),
  threeBounce: PLATFORM.moduleName('aurelia-spinner/dist/views/three-bounce.html'),
  wanderingCubes: PLATFORM.moduleName('aurelia-spinner/dist/views/wandering-cubes.html'),
  wave: PLATFORM.moduleName('aurelia-spinner/dist/views/wave.html')
}
