import { Actor, Circle, Color, Input  } from "excalibur";

export class Corner extends Actor {

    // todo: pass offset
    constructor(x: number, y: number) {
        super({
            x,
            y,
            color: Color.White,
        });
    }

    public onInitialize() {
        const circle = new Circle({
            radius: 8,
            color: this.color
          });
        this.graphics.use(circle);

        this.on("pointerdown", (evt: Input.PointerEvent) => {
            console.log(
                `corner at ${this.pos.x}, ${this.pos.y} was clicked`
            );

            // don't propagate to actors below
            evt.cancel();
        });

        this.on("pointerenter", () => {
            this.color = Color.Black;
        });

        this.on("pointerleave", () => {
            this.color = Color.White;
        });
    }
}