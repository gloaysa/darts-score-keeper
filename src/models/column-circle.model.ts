import { Circle } from "./circle.model";
import { Player } from "./player.model";

export class ColumnCircle {
  circles: Array<Circle>;
  points: number;
  player: Player;

  constructor(player) {
    this.circles = [
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
