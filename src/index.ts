import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { SpinnerConfig } from './spinner-config';


export function configure(config: FrameworkConfiguration, spinnerConfig: SpinnerConfig): void {
  config.globalResources(PLATFORM.moduleName('./spinner'));
  config.container.registerInstance('spinner-config', spinnerConfig);
}

export { SpinnerConfig, spinnerViews } from './spinner-config';

