import { PLATFORM } from "aurelia-framework";

export class SpinnerConfig {
  view: string;
  useBackgroundBlocker: boolean;
  blockerClass?: string;
}

// export const spinnerView = {
//   chasingDots: 'src/views/chasing-dots.html',
//   circle: 'src/views/circle.html',
//   cubeGrid: 'src/views/cube-grid.html',
//   doubleBounce: 'src/views/double-bounce.html',
//   fadingCircle: 'src/views/fading-circle.html',
//   pulse: 'src/views/pulse.html',
//   rotatingPlane: 'src/views/rotating-plane.html',
//   threeBounce: 'src/views/three-bounce.html',
//   wanderingCubes: 'src/views/wandering-cubes.html',
//   wave: 'src/views/wave.html'
// }

export const spinnerView = {
  chasingDots: PLATFORM.moduleName('src/views/chasing-dots.html'),
  circle: PLATFORM.moduleName('src/views/circle.html'),
  cubeGrid: PLATFORM.moduleName('src/views/cube-grid.html'),
  doubleBounce: PLATFORM.moduleName('src/views/double-bounce.html'),
  fadingCircle: PLATFORM.moduleName('src/views/fading-circle.html'),
  pulse: PLATFORM.moduleName('src/views/pulse.html'),
  rotatingPlane: PLATFORM.moduleName('src/views/rotating-plane.html'),
  threeBounce: PLATFORM.moduleName('src/views/three-bounce.html'),
  wanderingCubes: PLATFORM.moduleName('src/views/wandering-cubes.html'),
  wave: PLATFORM.moduleName('src/views/wave.html')
}