import { Actor, Color, Input, Polygon, PolygonCollider, vec } from "excalibur";

const SIDE_LENGTH = 23; // TODO: needs to stay in sync with circumradius
const HEX_WIDTH = 1.73 * SIDE_LENGTH // sqrt(3) * SIDE_LENGTH
const RESOURCE_COLORS = {
  'wood': Color.Green,
  'sheep': Color.Orange,
  'wheat': Color.Yellow,
  'ore': Color.Violet,
  'brick': Color.Red,
  'desert': Color.LightGray,
  'sea': Color.ExcaliburBlue
}
const HEX_POINTS = [
  vec(-1, Math.sqrt(3)).scale(SIDE_LENGTH),
  vec(1, Math.sqrt(3)).scale(SIDE_LENGTH),
  vec(2, 0).scale(SIDE_LENGTH),
  vec(1, -1 * Math.sqrt(3)).scale(SIDE_LENGTH),
  vec(-1, -1 * Math.sqrt(3)).scale(SIDE_LENGTH),
  vec(-2, 0).scale(SIDE_LENGTH),
];

export class Tile extends Actor {
  private resource: string;

  constructor(x: number, y: number, resource: string) {
    // need to set a collider with the same shape as the graphics since useGraphicsBounds doesn't seem to work
    const hexagonCollider = new PolygonCollider({
      points: HEX_POINTS
    });
    super({
      x, y, color: RESOURCE_COLORS[resource], collider: hexagonCollider
    });
    this.resource = resource
    this.pointer.useGraphicsBounds = false
  }

  public onInitialize() {
    const hexagon = new Polygon({
      points: HEX_POINTS,
      color: this.color
    });
    this.graphics.use(hexagon);

    this.on('pointerdown', (evt: Input.PointerEvent) => {
      console.log(`${this.resource} tile at ${this.pos.x}, ${this.pos.y} was clicked`)
    })
  }
}