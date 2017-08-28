import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';

import { SpinnerConfig, spinnerViews } from "./spinner-config";


export function configure(config: FrameworkConfiguration, spinnerConfig: SpinnerConfig): void {
  config.globalResources(PLATFORM.moduleName('./spinner'));
  config.container.registerInstance('spinner-config', spinnerConfig);
}

export {
  SpinnerConfig,
  spinnerViews
};
