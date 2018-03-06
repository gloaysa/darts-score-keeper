import { Component, Input, OnChanges } from '@angular/core';
import { SimpleTimer } from 'ng2-simple-timer';

import { Circle } from '../../../models/circle.model';
import { Player } from '../../../models/player.model';

@Component({
  selector: "app-circle-tracker",
  templateUrl: "./circle-tracker.component.html",
  styleUrls: ["./circle-tracker.component.css"]
})
export class CircleTrackerComponent implements OnChanges {

  @Input() player1: Player;
  @Input() player2: Player;
  circlesLeft: number;
  roundsLeft: number;
  gameStarted: boolean = false;
  seconds: number;
  minutes: number;
  timerId: string;

  constructor(private st: SimpleTimer) {}

  ngOnChanges(change) {
    if (change.player1) {
      this.createCircles(this.selectPlayer(change.player1.currentValue));
    }
    if (change.player2) {
      this.createCircles(this.selectPlayer(change.player2.currentValue));
    }
  }

  private createCircles(player: Player) {
    if (player !== undefined && player.circles.length === 0) {
      for (let i = 15; i < 22; i++) {
        const circle = new Circle(i, 0);
        player.circles.push(circle);
      }
    }
  }

  private startGame() {
    this.circlesLeft = 7;
    this.roundsLeft = 20;
    this.minutes = 0;
    this.seconds = 0;
    this.gameStarted = true;
    this.st.newTimer('playing', 1);
    this.timerId = this.st.subscribe('playing', () => this.addTime())
  }

  private addTime() {
    if (this.seconds < 59) {
      this.seconds++;
    } else {
      this.minutes++;
      this.seconds = 0;
    }
  }
  private addPoints(player: Player, index) {
    const circle = player.circles[index];
    const enemy: Player = player === this.player1 ? this.player2 : this.player1;
    const enemyCircle: Circle = enemy.circles[index];

    if (circle.closed && !enemyCircle.closed) { player.points = player.points + circle.number; }
    this.changeCircleStatus(circle, player);
    if (this.bothCirclesClosed(circle, enemyCircle)) {
      this.reduceCirclesLeft();
      this.disableCircle(circle, enemyCircle);
    };
  }

  private changeCircleStatus(circle: Circle, player: Player) {
    if (circle.once && circle.twice && !circle.closed) { circle.closed = true; }
    if (circle.once && !circle.twice) { circle.twice = true; }
    if (!circle.once) { circle.once = true; }
  }
  private selectState(player: Player, index) {
    if (player.circles[index].closed) { return "closed"; }
    if (player.circles[index].twice) { return "twice"; }
    if (player.circles[index].once) { return "once"; }
  }

  private selectPlayer(player: Player) {
    if (this.player1 === player) { return this.player1 }
    if (this.player2 === player) { return this.player2 }
  }

  private reduceCirclesLeft() {
    this.circlesLeft--;
  }

  private reduceRoundsLeft() {
    this.roundsLeft--;
  }

  private bothCirclesClosed(circle1: Circle, circle2: Circle) {
    return circle1.closed && circle2.closed ? true : false;
  }

  private disableCircle(circle1: Circle, circle2: Circle) {
    circle1.disabled = true;
    circle2.disabled = true;
  }

  private gameOver() {
    if (!this.gameStarted || this.circlesLeft === 0 || this.roundsLeft === 0) {
      return true;
    }
  }

}
