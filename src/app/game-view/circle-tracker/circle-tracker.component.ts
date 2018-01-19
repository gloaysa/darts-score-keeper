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
  private player1: Player;
  private player2: Player;
  public column1: ColumnCircle;
  public column2: ColumnCircle;
  private count: number;
  public gameOver = false;

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


  addPoints(column, circle) {
    this.updatePlayerPoints(column, circle);
    if (circle.once && circle.twice && !circle.closed) {
      circle.closed = true;
      this.gameOver = this.checkIfColumnClosed(column, circle);
    }
    if (circle.once && !circle.twice) { circle.twice = true; }
    if (!circle.once) { circle.once = true; }
  }

  updatePlayerPoints(column, circle) {
    const opositeColumn = this.selectOpositeColumnOf(column);
    const player = this.selectPlayerFromColumn(column);
    if (circle.closed) {
      opositeColumn.circles.forEach(cir => {
        if (cir.number === circle.number && !cir.closed) {
          column.points = column.points + circle.number;
          player.points = column.points;
        }
      });
      // this.uploadPlayersData(player);
    }
  }

  checkIfColumnClosed(column, circle) {
    const result: Array<boolean> = [];
    column.circles.forEach(cir => {
      (cir.twice && cir.closed) === true ? result.push(true) : this.gameOver = false;
    });
    circle.closed = true;
    return result.length === column.circles.length ? true : false;
  }

  selectOpositeColumnOf(column): ColumnCircle {
    return column.player === this.player1 ? this.column2 : this.column1;
  }

  selectPlayerFromColumn(column): Player {
    return column.player === this.player1 ? this.player1 : this.player2;
  }

  selectState(circle) {
    if (circle.closed) { return "closed"; }
    if (circle.twice) { return "twice"; }
    if (circle.once) { return "once"; }

  }

  uploadPlayersData(player) {
    this.playersData.forEach(playerData => {
      if (playerData.name === player.name) { playerData = player; }
    });
    this.playersService.updatePlayersData(this.playersData);
  }

  constructor(private playersService: PlayersDataService) {}

  ngOnInit() {
    this.fetchEvent();
  }
}
