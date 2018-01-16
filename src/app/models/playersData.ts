export class playersData {
    position: number;
    player: string;
    points: number;
    winner: boolean;
    playing: boolean;
    constructor(pos, name, points) {
        this.position = pos;
        this.player = name;
        this.points = points;
        this.winner = false;
        this.playing = false;
    }
}