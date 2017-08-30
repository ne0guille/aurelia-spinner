import { SpinnerService } from "./spinner-service";
export declare class SpinnerCustomAttribute {
    private element;
    private spinnerService;
    private target;
    show: boolean;
    view?: string;
    block: boolean;
    constructor(element: Element, spinnerService: SpinnerService);
    bind(): void;
    attached(): void;
    showChanged(showSpinner: boolean): void;
}
