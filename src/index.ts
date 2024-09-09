import { Engine, Loader, DisplayMode, CollisionType, Color, Input } from 'excalibur';
import { Tile } from './actors/tile/tile';
// import { Resources } from './resources';

/**
 * Managed game class
 */
class Game extends Engine {

  constructor() {
    super({ displayMode: DisplayMode.FitScreen });
  }
}

const game = new Game();
// const loader = new Loader(Object.values(Resources));
// game.start(loader);
game.start()

const xpadding = 10; // px
const ypadding = 0; // px
const xoffset = 65; // x-offset
const yoffset = 65; // y-offset
const tileWidth = 50;

// this represents the hex board. Each row contains a 1 for a drawn hex or a 0 for a "ghost" hex
// (used for positioning)
const rows = [
  [0,1,1,1,0],
  [1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1],
  [0,1,1,1,0]
];

const tileColors = [Color.Violet, Color.Orange, Color.Yellow, Color.Red, Color.Green];

const tiles: Tile[] = [];
for (const [j, numColumns] of rows.entries()) {
  for (const [i, shouldDrawTile] of numColumns.entries()) {
    if (shouldDrawTile === 0) {
      continue;
    }

    // console.log(`row ${j} - ${j % 2}`)

    tiles.push(
      new Tile({
        x: xoffset + i * (tileWidth + xpadding) + ((j % 2) * (tileWidth + xpadding)/2),
        y: yoffset + j * (tileWidth + ypadding),
        color: tileColors[j % tileColors.length]
      })
    )
  }
}



tiles.forEach(function (tile) {
  // Make sure that tiles can participate in collisions
  tile.body.collisionType = CollisionType.Active;

  tile.on('pointerdown', (evt: Input.PointerEvent) => {
    console.log('tile was clicked')
  })

  // Add the tile to the current scene to be drawn
  game.add(tile);
});
