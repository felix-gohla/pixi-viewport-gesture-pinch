"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const pixi_js_1 = require("pixi.js");
const base_plugin_1 = tslib_1.__importDefault(require("./base-plugin"));
class PinchPlugin extends base_plugin_1.default {
    constructor(options) {
        super();
        this.onGestureStart = (event) => {
            event.preventDefault();
            this.initialScale = this.viewport.scale.x;
            const initialGlobalPosition = this.viewport.input.getPointerPosition(event);
            this.initialLocalPosition = this.viewport.toLocal(initialGlobalPosition);
        };
        this.onGestureEnd = (event) => {
            event.preventDefault();
            this.viewport.emit("zoomed", { viewport: this.viewport, type: "pinch" });
        };
        this.onGestureChange = (event) => {
            event.preventDefault();
            if (!this.initialLocalPosition) {
                throw new Error("Missing initial position");
            }
            const newScale = event.scale * this.initialScale;
            this.viewport.setZoom(newScale);
            const globalPosition = this.viewport.input.getPointerPosition(event);
            const localPosition = this.viewport.toLocal(globalPosition);
            const deltaX = localPosition.x - this.initialLocalPosition.x;
            const deltaY = localPosition.y - this.initialLocalPosition.y;
            this.moveRelative(deltaX, deltaY);
            this.viewport.emit("moved", { viewport: this.viewport, type: "pinch" });
        };
        this.viewport = options.viewport;
        this.listenerNode = options.listenerNode || document.body;
        this.listenerNode.addEventListener("gesturestart", this.onGestureStart);
        this.listenerNode.addEventListener("gesturechange", this.onGestureChange);
        this.listenerNode.addEventListener("gestureend", this.onGestureEnd);
        this.initialScale = this.viewport.scale.x;
    }
    destroy() {
        this.listenerNode.removeEventListener("gesturestart", this.onGestureStart);
        this.listenerNode.removeEventListener("gesturechange", this.onGestureChange);
        this.listenerNode.removeEventListener("gestureend", this.onGestureEnd);
    }
    moveRelative(deltaX, deltaY) {
        this.viewport.moveCenter(new pixi_js_1.Point(this.viewport.center.x - deltaX, this.viewport.center.y - deltaY));
    }
}
exports.default = PinchPlugin;
