import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';

import { SpinnerConfig } from "./spinner-config";


export function configure(config: FrameworkConfiguration, spinnerConfig: SpinnerConfig) {
  console.log(spinnerConfig);
  config.globalResources(PLATFORM.moduleName('./spinner'));
  config.container.registerInstance('spinner-config', spinnerConfig);
}

export {
  SpinnerConfig
}