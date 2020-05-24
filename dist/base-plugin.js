"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasePlugin {
    destroy() { }
    down() {
        return false;
    }
    move(_event) {
        return false;
    }
    up() {
        return false;
    }
    wheel() {
        return false;
    }
    update() { }
    reset() { }
    resize() { }
    pause() { }
    resume() { }
}
exports.default = BasePlugin;
