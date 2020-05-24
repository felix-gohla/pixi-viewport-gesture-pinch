import { Viewport } from "pixi-viewport";
import { IPoint } from "pixi.js";
import BasePlugin from "./base-plugin";
interface Options {
    viewport: Viewport;
    listenerNode?: HTMLElement;
}
declare class PinchPlugin extends BasePlugin {
    viewport: Viewport;
    listenerNode: HTMLElement;
    initialScale: number;
    initialLocalPosition?: IPoint;
    constructor(options: Options);
    destroy(): void;
    private onGestureStart;
    private onGestureEnd;
    private onGestureChange;
    private moveRelative;
}
export default PinchPlugin;
