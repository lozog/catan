import { Actor, Line, Color, Input, vec, Vector, EdgeCollider, Circle, Rectangle  } from "excalibur";
export class Edge extends Actor {
    private ends: any[];

    constructor(ends: any[], offset: number) {
        super({
            pos: vec(ends[0].x + offset, ends[0].y + offset),
            color: Color.Black,
        });
        this.ends = ends;
        this.graphics.anchor = Vector.Zero
    }

    public onInitialize() {
        // the "start" is the pos of the actor, and we use 0,0
        // end must be translated by ends[0] to account for this
        const line = new Line({
            start: vec(0, 0),
            end: vec(this.ends[1].x - this.ends[0].x, this.ends[1].y - this.ends[0].y),
            color: this.color,
            thickness: 6
          });
        this.graphics.use(line);

        this.on("pointerdown", (evt: Input.PointerEvent) => {
            console.log(
                `edge from ${this.ends[0].x}, ${this.ends[0].y} to ${this.ends[1].x}, ${this.ends[1].y} was clicked`
            );
        });

        this.on("pointerenter", () => {
            this.color = Color.White;
        });

        this.on("pointerleave", () => {
            this.color = Color.Black;
        });
    }
}