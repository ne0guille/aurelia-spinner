import { TaskQueue } from 'aurelia-framework';
import { SpinnerService } from './spinner-service';
export declare class SpinnerCustomAttribute {
    private element;
    private taskQueue;
    private spinnerService;
    private target;
    show: boolean;
    view?: string;
    block: boolean;
    constructor(element: Element, taskQueue: TaskQueue, spinnerService: SpinnerService);
    bind(): void;
    attached(): void;
    showChanged(newValue: boolean): void;
}
