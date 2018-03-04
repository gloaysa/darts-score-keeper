import { Circle } from "./circle.model";

export class Player {
    position: number;
    name: string;
    points: number;
    winner: boolean;
    playing: boolean;
    player1: boolean;
    player2: boolean;
    circles: Circle[];
    constructor(pos, name, points) {
        this.position = pos;
        this.name = name;
        this.points = points;
        this.winner = false;
        this.playing = false;
        this.player1 = false;
        this.player2 = false;
    }
}
