import { SpinnerConfig } from "./spinner-config";
import { SpinnerService } from "./spinner-service";
export declare class SpinnerCustomAttribute {
    private element;
    private spinnerService;
    private spinnerConfig;
    private target;
    show: boolean;
    view?: string;
    block: boolean;
    isContainer: boolean;
    constructor(element: Element, spinnerService: SpinnerService, spinnerConfig: SpinnerConfig);
    bind(): void;
    attached(): void;
    showChanged(showSpinner: boolean): void;
}
