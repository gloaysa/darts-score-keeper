export class Circle {
    number: number;
    once: boolean;
    twice: boolean;
    closed: boolean;
    player: number;
    constructor(number, player) {
        this.number = number;
        this.once = false;
        this.twice = false;
        this.closed = false;
        this.player = player;
    }
}