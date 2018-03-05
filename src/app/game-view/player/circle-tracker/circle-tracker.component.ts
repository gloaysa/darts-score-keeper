import { Component, Input, OnChanges } from '@angular/core';

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

  addPoints(player: Player, index) {
    const circle = player.circles[index];
    const enemy: Player = player === this.player1 ? this.player2 : this.player1;
    const enemyCircle: Circle = enemy.circles[index];

    if (circle.closed && !enemyCircle.closed) { player.points = player.points + circle.number; }
    this.changeCircleStatus(circle, player, index);
  }

  changeCircleStatus(circle, player, index) {
    if (circle.once && circle.twice && !circle.closed) { player.circles[index].closed = true; }
    if (circle.once && !circle.twice) { player.circles[index].twice = true; }
    if (!circle.once) { player.circles[index].once = true; }
  }
  selectState(player, index) {
    if (player.circles[index].closed) { return "closed"; }
    if (player.circles[index].twice) { return "twice"; }
    if (player.circles[index].once) { return "once"; }
  }

  selectPlayer(player) {
    if (this.player1 === player) { return this.player1 }
    if (this.player2 === player) { return this.player2 }
  }

  private createCircles(player: Player) {
    if (player !== undefined) {
      for (let i = 15; i < 22; i++) {
        const circle = new Circle(i, 0);
        player.circles.push(circle);
      }
    }
    
  }

  ngOnChanges(change) {
    if (change.player1) {
      this.createCircles(this.selectPlayer(change.player1.currentValue));
    }
    if (change.player2) {
      this.createCircles(this.selectPlayer(change.player2.currentValue));
    }
  }
}
