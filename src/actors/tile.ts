import { Actor, Color, Input, Polygon, PolygonCollider, vec, Vector } from "excalibur";

const RESOURCE_COLORS = {
    wood: Color.Green,
    sheep: Color.Orange,
    wheat: Color.Yellow,
    ore: Color.Violet,
    brick: Color.Red,
    desert: Color.LightGray,
    sea: Color.ExcaliburBlue,
};

export class Tile extends Actor {
    private resource: string;
    private hexagonPoints: Vector[];

    // todo: pass offset
    constructor(x: number, y: number, circumradius: number, resource: string) {
        const hexagonPoints = [
            vec(-1, Math.sqrt(3)).scale(circumradius/2),
            vec(1, Math.sqrt(3)).scale(circumradius/2),
            vec(2, 0).scale(circumradius/2),
            vec(1, -1 * Math.sqrt(3)).scale(circumradius/2),
            vec(-1, -1 * Math.sqrt(3)).scale(circumradius/2),
            vec(-2, 0).scale(circumradius/2),
        ];
        // need to set a collider with the same shape as the graphics since useGraphicsBounds doesn't seem to work
        const collider = new PolygonCollider({
            points: hexagonPoints,
        });
        super({
            x,
            y,
            color: RESOURCE_COLORS[resource],
            collider,
        });
        this.pointer.useGraphicsBounds = false;
        this.resource = resource;
        this.hexagonPoints = hexagonPoints;

    }

    public onInitialize() {
        const hexagon = new Polygon({
            points: this.hexagonPoints,
            color: this.color,
        });
        this.graphics.use(hexagon);

        this.on("pointerdown", (evt: Input.PointerEvent) => {
            console.log(
                `${this.resource} tile at ${this.pos.x}, ${this.pos.y} was clicked`
            );
        });

        this.on("pointerenter", () => {
            this.color = Color.White;
        });

        this.on("pointerleave", () => {
            this.color = RESOURCE_COLORS[this.resource];
        });
    }
}
