import { Actor, Line, Color, Input, vec, Vector  } from "excalibur";

export class Edge extends Actor {
    private ends: any[];

    constructor(x: number, y: number, ends: any[]) {
        super({
            x,
            y,
            color: Color.Black,
        });
        this.ends = ends;
        this.graphics.anchor = Vector.Zero
    }

    public onInitialize() {
        const line = new Line({
            start: vec(this.ends[0].x, this.ends[0].y),
            end: vec(this.ends[1].x, this.ends[1].y),
            color: this.color,
            thickness: 6
          });
        this.graphics.use(line);

        this.on("pointerdown", (evt: Input.PointerEvent) => {
            console.log(
                `edge at ${this.pos.x}, ${this.pos.y} was clicked`
            );
        });
    }
}