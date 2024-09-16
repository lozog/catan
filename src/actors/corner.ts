import { Actor, Circle, Color, Input, vec  } from "excalibur";
import { Game } from "..";
import { Player } from "@/lib/player";

export class Corner extends Actor {
    game: Game;
    player: Player | null = null;

    constructor(x: number, y: number, offset: number, game: Game) {
        super({
            pos: vec(x + offset, y + offset),
            color: Color.White,
        });

        this.game = game;
    }

    public onInitialize() {
        const circle = new Circle({
            radius: 8,
            color: this.color
          });
        this.graphics.use(circle);

        this.on("pointerdown", (evt: Input.PointerEvent) => {
            console.log(
                `corner at ${this.pos.x}, ${this.pos.y} was clicked`
            );

            // when this is clicked, how can we get info from the game state?
            this.game.setSettlement(this.id);

            if (this.player) {
                console.log(`owned by ${this.player}`)
            }

            // don't propagate to actors below
            evt.cancel();
        });

        this.on("pointerenter", () => {
            this.color = Color.Black;
        });

        this.on("pointerleave", () => {
            this.color = Color.White;
        });
    }
}