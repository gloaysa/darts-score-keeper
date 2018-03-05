export class Circle {
    number: number;
    once: boolean;
    twice: boolean;
    closed: boolean;
    disabled: boolean;
    player: number;
    constructor(number, player) {
        this.number = number;
        this.once = false;
        this.twice = false;
        this.closed = false;
        this.disabled = false;
        this.player = player;
    }
}