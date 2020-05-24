import { interaction } from "pixi.js";
export default abstract class BasePlugin {
    destroy(): void;
    down(): boolean;
    move(_event: interaction.InteractionEvent): boolean;
    up(): boolean;
    wheel(): boolean;
    update(): void;
    reset(): void;
    resize(): void;
    pause(): void;
    resume(): void;
}
