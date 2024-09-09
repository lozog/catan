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

// this represents the hex board. Each row contains a 1 for a drawn hex or a 0 for a "ghost" hex
// (used for positioning)
const gameBoard = [
  [0,1,1,1,0],
   [1,1,1,1],
  [1,1,1,1,1],
   [1,1,1,1],
  [0,1,1,1,0]
];

const tiles: Tile[] = [];
for (const [j, numColumns] of gameBoard.entries()) {
  for (const [i, shouldDrawTile] of numColumns.entries()) {
    if (shouldDrawTile === 0) {
      continue;
    }

    // console.log(`row ${j} - ${j % 2}`)

    tiles.push(
      new Tile(i, j)
    )
  }
}



tiles.forEach(function (tile) {
  // Add the tile to the current scene to be drawn
  game.add(tile);
});
