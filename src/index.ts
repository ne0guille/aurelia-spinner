import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';

import { SpinnerConfig, spinnerView } from "./spinner-config";


export function configure(config: FrameworkConfiguration, spinnerConfig: SpinnerConfig) {
  config.globalResources('./aurelia-spinner');
  config.container.registerInstance('spinner-config', spinnerConfig);
}

export {
  SpinnerConfig,
  spinnerView
}