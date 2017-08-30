export interface SpinnerConfig {
    spinner?: string;
    useBackgroundOverlay?: boolean;
    blockerClass?: string;
}
export declare class DefaultSpinnerConfig implements SpinnerConfig {
    spinner?: string;
    useBackgroundOverlay: boolean;
    blockerClass: string;
}
export declare const spinnerViews: {
    chasingDots: string;
    circle: string;
    cubeGrid: string;
    doubleBounce: string;
    fadingCircle: string;
    foldingCube: string;
    pulse: string;
    rotatingPlane: string;
    threeBounce: string;
    wanderingCubes: string;
    wave: string;
};
