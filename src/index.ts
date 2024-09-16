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
import { Edge } from "./actors/edge";
import { Player } from "./lib/player";
// import { Resources } from './resources';

const NUM_PLAYERS = 1;
enum GamePhase {
    setupOne = 'setup_one'
}

/**
 * Managed game class
 */
class Game extends Engine {
    players: Player[] = [];
    currentGamePhase: GamePhase = GamePhase.setupOne;
    currentPlayer: number;
    victoryPointsToWin: number;

    constructor() {
        super({ displayMode: DisplayMode.FitScreen });
    }

    getCurrentPlayer(): Player {
        return this.players[this.currentPlayer];
    }

    hasPlayerWon(player): boolean {
        return player.points >= this.victoryPointsToWin
    }
}

const game = new Game();
// const loader = new Loader(Object.values(Resources));
// game.start(loader);
game.start();

const scenarioBuilder = new ScenarioBuilder();
const scenario = scenarioBuilder.getScenario();
console.log(scenario.board);

// TODO: won't need this once camera is implemented
const OFFSET = 300;

const tiles: Tile[] = [];
for (const tile of scenario.board.tiles) {
    tiles.push(
        new Tile(tile.center.x, tile.center.y, scenarioBuilder.getCircumradius(), OFFSET, tile.type)
    );
}

const corners: Corner[] = [];
for (const corner of scenario.board.corners) {
    corners.push(
        new Corner(corner.center.x, corner.center.y, OFFSET)
    );
}

const edges: Edge[] = [];
for (const edge of scenario.board.edges) {
    edges.push(
        new Edge(edge.ends, OFFSET)
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

edges.forEach(function (edge) {
    // Add the edge to the current scene to be drawn
    game.add(edge);
});


// Set up the game and begin

// initialize players

for (let i = 0; i < NUM_PLAYERS; i++) {
    game.players.push(
        new Player(i)
    );
}
game.currentPlayer = 0;
game.victoryPointsToWin = scenario.victoryPoints;
