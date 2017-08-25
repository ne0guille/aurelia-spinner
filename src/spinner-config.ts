import { PLATFORM } from "aurelia-framework";

export class SpinnerConfig {
  spinner: string;
  useBackgroundBlocker: boolean;
  blockerClass?: string;
}

export const spinnerView = {
  chasingDots: 'views/chasing-dots.html',
  circle: 'views/circle.html',
  cubeGrid: 'views/cube-grid.html',
  doubleBounce: 'views/double-bounce.html',
  fadingCircle: 'views/fading-circle.html',
  pulse: 'views/pulse.html',
  rotatingPlane: 'views/rotating-plane.html',
  threeBounce: 'views/three-bounce.html',
  wanderingCubes: 'views/wandering-cubes.html',
  wave: 'views/wave.html'
}

// export const spinnerView = {
//   chasingDots: PLATFORM.moduleName('views/chasing-dots.html'),
//   circle: PLATFORM.moduleName('views/circle.html'),
//   cubeGrid: PLATFORM.moduleName('views/cube-grid.html'),
//   doubleBounce: PLATFORM.moduleName('views/double-bounce.html'),
//   fadingCircle: PLATFORM.moduleName('views/fading-circle.html'),
//   pulse: PLATFORM.moduleName('views/pulse.html'),
//   rotatingPlane: PLATFORM.moduleName('views/rotating-plane.html'),
//   threeBounce: PLATFORM.moduleName('views/three-bounce.html'),
//   wanderingCubes: PLATFORM.moduleName('views/wandering-cubes.html'),
//   wave: PLATFORM.moduleName('views/wave.html')
// }