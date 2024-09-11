import {
    Engine,
    Loader,
    DisplayMode,
    CollisionType,
    Color,
    Input,
} from "excalibur";
import { Tile } from "./actors/tile";
import { ScenarioBuilder } from "./lib/scenariobuilder";
import { Corner } from "./actors/corner";
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
game.start();

// // this represents the hex board. Each row contains a 1 for a drawn hex or a 0 for a "ghost" hex
// // (used for positioning)
// const gameBoard = [
//   [0,1,1,1,0],
//    [1,1,1,1],
//   [1,1,1,1,1],
//    [1,1,1,1],
//   [0,1,1,1,0]
// ];

// for (const [row, numRows] of gameBoard.entries()) {
//   for (const [col, shouldDrawTile] of numRows.entries()) {
//     if (shouldDrawTile === 0) {
//       continue;
//     }

//     // console.log(`row ${row} - ${row % 2}`)

//     tiles.push(
//       new Tile(row, col)
//     )
//   }
// }

const scenarioBuilder = new ScenarioBuilder();

const scenario = scenarioBuilder.getScenario();
console.log(scenario.board);


const OFFSET = 300;

const tiles: Tile[] = [];
for (const tile of scenario.board.tiles) {
    tiles.push(
        new Tile(tile.center.x + OFFSET, tile.center.y + OFFSET, tile.type)
    );
}

const corners: Corner[] = [];
for (const corner of scenario.board.corners) {
    corners.push(
        new Corner(corner.center.x + OFFSET, corner.center.y + OFFSET)
    );
}

tiles.forEach(function (tile) {
    // Add the tile to the current scene to be drawn
    game.add(tile);
});

corners.forEach(function (corner) {
    // Add the corner to the current scene to be drawn
    game.add(corner);
});
