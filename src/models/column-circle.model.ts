import { Circle } from "./circle.model";

export class ColumnCircle {
  number: Array<Circle>;
  points: number;
  player: object;

  constructor(player) {
    this.number = [
      new Circle(15),
      new Circle(16),
      new Circle(17),
      new Circle(18),
      new Circle(19),
      new Circle(20),
      new Circle(25),
    ];
    this.points = 0;
    this.player = player;

  }
}
