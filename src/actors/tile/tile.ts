import { Actor, Polygon, vec } from "excalibur";

const SIDE_LENGTH = 30;

export class Tile extends Actor {
  public onInitialize() {
    // Set as the default drawing
    const triangle = new Polygon({
      points: [vec(0 * SIDE_LENGTH, 1 * SIDE_LENGTH), vec(0.87 * SIDE_LENGTH, 0.5 * SIDE_LENGTH), vec(0.87 * SIDE_LENGTH, -0.5 * SIDE_LENGTH), vec(0 * SIDE_LENGTH, -1 * SIDE_LENGTH), vec(-0.87 * SIDE_LENGTH, -0.5 * SIDE_LENGTH), vec(-0.87 * SIDE_LENGTH, 0.5 * SIDE_LENGTH),],
      color: this.color
    });
    this.graphics.use(triangle);
  }
}