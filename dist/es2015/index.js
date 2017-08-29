import { PLATFORM } from 'aurelia-pal';
import { spinnerViews } from "./spinner-config";
export function configure(config, spinnerConfig) {
    config.globalResources(PLATFORM.moduleName('./spinner'));
    config.container.registerInstance('spinner-config', spinnerConfig);
}
export { spinnerViews };
