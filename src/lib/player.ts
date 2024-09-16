enum PlayerAction {
    placeRoad = 'road',
    placeSettlement = 'settlement',
}

export class Player {
    playerId: number;
    currentAction: PlayerAction;
    points: number = 0;

    constructor(playerId: number) {
        this.playerId = playerId;
    }
}
