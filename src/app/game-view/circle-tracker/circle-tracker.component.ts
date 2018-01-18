import { Component, OnInit, Input } from '@angular/core';
import { PlayersDataService } from '../../../shared/playersdata.service';
import { Circle } from '../../../models/circle.model';
import { Player } from '../../../models/player.model';

@Component({
  selector: "app-circle-tracker",
  templateUrl: "./circle-tracker.component.html",
  styleUrls: ["./circle-tracker.component.css"],
  providers: []
})
export class CircleTrackerComponent implements OnInit {
  public playersData;
  public player1;
  public player2;
  public circle1: Circle;
  public circle2: Circle;
  circles = [];

  fetchEvent() {
    this.playersService.sharePlayersData$.subscribe(data => {
      this.playersData = data;
      this.selectPlayers();
      this.createCircles();
    });
  }

  selectPlayers() {
    this.playersData.forEach(player => {
      if (player.player1) { this.player1 = player; }
      if (player.player2) { this.player2 = player; }
    });
  }

  createCircles() {
    this.circle1 = new Circle(this.player1);
    this.circle2 = new Circle(this.player2);
  }


  /* addPoints(index) {
    const circle = this.circles[index];
    if (circle.closed) {
      this.count = this.count + circle.number;
    }
    if (circle.once && circle.twice && !circle.closed) { this.circles[index].closed = true; }
    if (circle.once && !circle.twice) { this.circles[index].twice = true; }
    if (!circle.once) { this.circles[index].once = true; }
  } */

  /* selectState(index) {
    if (this.circles[index].closed) { return "closed"; }
    if (this.circles[index].twice) { return "twice"; }
    if (this.circles[index].once) { return "once"; }

  } */

  constructor(private playersService: PlayersDataService) {}

  ngOnInit() {
    this.fetchEvent();
  }
}
