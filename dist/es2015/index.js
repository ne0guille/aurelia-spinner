import { PLATFORM } from 'aurelia-pal';
export function configure(config, spinnerConfig) {
    config.globalResources(PLATFORM.moduleName('./spinner'));
    config.container.registerInstance('spinner-config', spinnerConfig);
}
export { spinnerViews } from './spinner-config';
