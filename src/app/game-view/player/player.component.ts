import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayersDataService } from '../../../shared/playersdata.service';
import { Player } from '../../../models/player.model';
import { async } from '@angular/core/testing';

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
  providers: []
})
export class PlayerComponent implements OnInit {
  public playersData: Array<Player>;
  private player1: Player;
  private player2: Player;
  public numberOfRounds: number;


  disableAll() {
    return true;
  }

  selectPlayer(player) {
    if (!this.player1.name || (this.player1.name && this.player2.name)) {
      this.playersService.selectPlayers(player, undefined);
    } else {
      this.playersService.selectPlayers(undefined, player);
    }
    this.updatePlayerArray();
  }

  selectClassPlayer(player) {
    if (this.player1.name === player.name || this.player2.name === player.name) {
      return true;
    }
  }

  twoPlayersSelected(): boolean {
    if (this.player1.name && this.player2.name) {
      return false;
    } else {
      return true;
    }
  }

  updatePlayerArray() {
    this.playersData.forEach(player => {
      if (player.name === this.player1.name) {
        player.player1 = true;
        player.playing = true;
      } else if (player.name === this.player2.name) {
        player.player2 = true;
        player.playing = true;
      } else {
        player.playing = false;
      }
    });
    this.playersService.updatePlayersData(this.playersData);
  }

  updateNumberOfRounds(number) {
    this.playersService.updateNumberOfRounds(number);
  }

  loadData() {
    this.playersService.sharePlayersData$.subscribe(data => (this.playersData = data));
    this.playersService.sharePlayer1$.subscribe(player => (this.player1 = player));
    this.playersService.sharePlayer2$.subscribe(player => (this.player2 = player));
    this.playersService.updatePlaying(false);
    this.playersService.numberOfRounds$.subscribe(rounds => (this.numberOfRounds = rounds));
  }

  constructor(private playersService: PlayersDataService) {}

  ngOnInit() {
    this.loadData();

  }
}
