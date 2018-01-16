export class playersData {
    position: number;
    name: string;
    points: number;
    winner: boolean;
    playing: boolean;
    constructor(pos, name, points) {
        this.position = pos;
        this.name = name;
        this.points = points;
        this.winner = false;
        this.playing = false;
    }
}
