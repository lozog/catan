import { Actor, Color, Input, Polygon, vec } from "excalibur";

const SIDE_LENGTH = 30;

const xpadding = 10; // px
const ypadding = 0; // px
const xoffset = 65; // x-offset
const yoffset = 65; // y-offset
const tileWidth = 50;
const tileColors = [Color.Violet, Color.Orange, Color.Yellow, Color.Red, Color.Green];

export class Tile extends Actor {
  // grid coordinates
  private row: number;
  private col: number;

  constructor(i: number, j: number) {
    super({
      x: xoffset + i * (tileWidth + xpadding) + ((j % 2) * (tileWidth + xpadding)/2),
      y: yoffset + j * (tileWidth + ypadding),
      color: tileColors[Math.floor(Math.random() * tileColors.length)]
    });

    this.row = j;
    this.col = i;
  }
  public onInitialize() {
    // Set as the default drawing
    const triangle = new Polygon({
      points: [vec(0 * SIDE_LENGTH, 1 * SIDE_LENGTH), vec(0.87 * SIDE_LENGTH, 0.5 * SIDE_LENGTH), vec(0.87 * SIDE_LENGTH, -0.5 * SIDE_LENGTH), vec(0 * SIDE_LENGTH, -1 * SIDE_LENGTH), vec(-0.87 * SIDE_LENGTH, -0.5 * SIDE_LENGTH), vec(-0.87 * SIDE_LENGTH, 0.5 * SIDE_LENGTH),],
      color: this.color
    });
    this.graphics.use(triangle);

    this.on('pointerdown', (evt: Input.PointerEvent) => {
      console.log(`${this.color} tile at ${this.row}, ${this.col} was clicked`)
    })
  }
}