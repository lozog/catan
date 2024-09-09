import { Actor, Color, Input, Polygon, vec } from "excalibur";

const SIDE_LENGTH = 60;
const HEX_WIDTH = 1.73 * SIDE_LENGTH // sqrt(3) * SIDE_LENGTH

const xpadding = 10; // px
const ypadding = xpadding - 11; // px
const xoffset = 80; // x-offset
const yoffset = 85; // y-offset
const RESOURCES = ['wood', 'sheep', 'wheat', 'ore', 'brick']
const RESOURCE_COLORS = {
  'wood': Color.Green,
  'sheep': Color.Orange,
  'wheat': Color.Yellow,
  'ore': Color.Violet,
  'brick': Color.Red,
}

export class Tile extends Actor {
  // grid coordinates
  private row: number;
  private col: number;

  private resource: string;

  constructor(row: number, col: number) {
    const resource = RESOURCES[Math.floor(Math.random() * RESOURCES.length)]
    super({
      x: xoffset + col * (HEX_WIDTH + xpadding) + ((row % 2) * (HEX_WIDTH + xpadding)/2),
      y: yoffset + row * (HEX_WIDTH + ypadding),
      color: RESOURCE_COLORS[resource]
    });

    this.row = row;
    this.col = col;
    this.resource = resource;
  }
  public onInitialize() {
    const hexagon = new Polygon({
      points: [
        vec(0, 1).scale(SIDE_LENGTH),
        vec(0.87, 0.5).scale(SIDE_LENGTH),
        vec(0.87, -0.5).scale(SIDE_LENGTH),
        vec(0, -1).scale(SIDE_LENGTH),
        vec(-0.87, -0.5).scale(SIDE_LENGTH),
        vec(-0.87, 0.5).scale(SIDE_LENGTH),
      ],
      color: this.color
    });
    this.graphics.use(hexagon);

    this.on('pointerdown', (evt: Input.PointerEvent) => {
      console.log(`${this.resource} tile at ${this.row}, ${this.col} was clicked`)
    })
  }
}