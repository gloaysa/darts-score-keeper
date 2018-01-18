import { Component, OnInit, Input } from '@angular/core';
import { PlayersDataService } from '../../shared/playersdata.service';
import { Circle } from '../../models/circle.model';

@Component({
  selector: "app-circle-tracker",
  templateUrl: "./circle-tracker.component.html",
  styleUrls: ["./circle-tracker.component.css"],
  providers: [PlayersDataService]
})
export class CircleTrackerComponent implements OnInit {
  public playersData;
  public player1;
  public player2;
  count = 0;
  circles = [];

  selectPlayers() {
    this.playersData.forEach(player => {
      if (player.player1) { this.player1 = player; }
      if (player.player2) { this.player2 = player; }
    });
    console.log("player1:", this.player1);
    console.log("player2:", this.player2);
    return true;
  }

  createCircles() {
    for (let i = 15; i < 22; i++) {
      const circle = new Circle(i, {player: 0});
      this.circles.push(circle);
    }
  }

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
    if (this.circles[index].closed) { return "closed"; }
    if (this.circles[index].twice) { return "twice"; }
    if (this.circles[index].once) { return "once"; }

  }

  constructor(private playersService: PlayersDataService) {}

  ngOnInit() {
    console.log("hola");
    this.playersService.loadPlayersData().subscribe();
    this.playersService.sharePlayer1$.subscribe(player => this.player1 = player);
    this.playersService.sharePlayersData$.subscribe(data => this.playersData = JSON.parse(data));
    console.log(this.player1)
  }
}
