import { Component, OnInit, Input } from '@angular/core';

import { Circle } from '../../../models/circle.model';
import { PlayersService } from '../../../shared/players.service';
import { Player } from '../../../models/player.model';

@Component({
  selector: "app-circle-tracker",
  templateUrl: "./circle-tracker.component.html",
  styleUrls: ["./circle-tracker.component.css"]
})
export class CircleTrackerComponent implements OnInit {
  count = 0;
  player1: Player;
  player2: Player;
  circles: Circle[] = [];

  addPoints(index) {
    const circle = this.circles[index];
    if (circle.closed) {
      this.count = this.count + circle.number;
    }
    if (circle.once && circle.twice && !circle.closed) { this.circles[index].closed = true; }
    if (circle.once && !circle.twice) { this.circles[index].twice = true; }
    if (!circle.once) { this.circles[index].once = true; }
  }

  selectState(index) {
    if (this.player1.circles[index].closed) { return "closed"; }
    if (this.player1.circles[index].twice) { return "twice"; }
    if (this.player1.circles[index].once) { return "once"; }
  }

  private createCircles(player: Player) {
    for (let i = 15; i < 22; i++) {
      const circle = new Circle(i, 0);
      player.circles.push(circle);
    }
  }

  constructor(private playersService: PlayersService) {}

  ngOnInit() {
    this.playersService.sharePlayer1$.subscribe(player => {
      this.player1 = player;
      this.createCircles(this.player1)
    });
    this.playersService.sharePlayer2$.subscribe(player => {
      this.player2 = player;
      this.createCircles(this.player2);
    });
  }
}
