import { Component, OnInit, Input } from '@angular/core';
import { PlayersDataService } from '../../../shared/playersdata.service';
import { Circle } from '../../../models/circle.model';
import { ColumnCircle } from '../../../models/column-circle.model';
import { Player } from '../../../models/player.model';

@Component({
  selector: "app-circle-tracker",
  templateUrl: "./circle-tracker.component.html",
  styleUrls: ["./circle-tracker.component.css"],
  providers: []
})
export class CircleTrackerComponent implements OnInit {
  public playersData;
  private player1;
  private player2;
  public column1: ColumnCircle;
  public column2: ColumnCircle;
  private count;

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
    this.column1 = new ColumnCircle(this.player1);
    this.column2 = new ColumnCircle(this.player2);
  }


  addPoints(player, circle) {
    if (this.column1.player === player && circle.closed) {
      this.column1.points = circle.points + circle.number;
    }
    if (this.column2.player === player && circle.closed) {
      this.column2.points = circle.points + circle.number;
    }
    if (circle.once && circle.twice && !circle.closed) { circle.closed = true; }
    if (circle.once && !circle.twice) { circle.twice = true; }
    if (!circle.once) { circle.once = true; }
  }

  selectState(circle) {
    if (circle.closed) { return "closed"; }
    if (circle.twice) { return "twice"; }
    if (circle.once) { return "once"; }

  }

  constructor(private playersService: PlayersDataService) {}

  ngOnInit() {
    this.fetchEvent();
  }
}
