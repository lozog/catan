import { Actor, Color, Input, Polygon, vec } from "excalibur";

const SIDE_LENGTH = 30;

const xpadding = 30; // px
const ypadding = 25; // px
const xoffset = 65; // x-offset
const yoffset = 65; // y-offset
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

  constructor(i: number, j: number) {
    const resource = RESOURCES[Math.floor(Math.random() * RESOURCES.length)]
    super({
      x: xoffset + i * (SIDE_LENGTH + xpadding) + ((j % 2) * (SIDE_LENGTH + xpadding)/2),
      y: yoffset + j * (SIDE_LENGTH + ypadding),
      color: RESOURCE_COLORS[resource]
    });

    this.row = j;
    this.col = i;
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