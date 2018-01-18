export class Circle {
  number: Array<number>;
  points: number;
  once: boolean;
  twice: boolean;
  closed: boolean;
  player: object;

  constructor(player) {
    this.number = [15, 16, 17, 18, 19, 20, 25];
    this.points = 0;
    this.once = false;
    this.twice = false;
    this.closed = false;
    this.player = player;

  }
}
