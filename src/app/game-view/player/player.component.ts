import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayersDataService } from '../../shared/playersdata.service';
import { playersData } from '../../models/playersData';
import { async } from '@angular/core/testing';

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
  providers: []
})
export class PlayerComponent implements OnInit {
  playersData: Array<playersData>;
  player1: string;
  player2: string;

  disableAll() {
    return true;
  }

  selectPlayer(player) {
    if (!this.player1 || (this.player1 && this.player2)) {
      this.playersService.selectPlayers(player.name, undefined);
    } else {
      this.playersService.selectPlayers(undefined, player.name);
    }
    this.updatePlayerArray(player);
  }

  selectClassPlayer(name) {
    if (this.player1 === name || this.player2 === name) {
      return true;
    }
  }

  updatePlayerArray(name) {
    this.playersData.forEach(player => {
      if (player.player === this.player1 || player.player === this.player2) {
        player.playing = true;
      } else {
        player.playing = false;
      }
    });
    this.playersService.updatePlayersData(this.playersData);
  }

  constructor(private playersService: PlayersDataService) {
    this.playersService.sharePlayersData$.subscribe(data => this.playersData = JSON.parse(data));
    this.playersService.sharePlayer1$.subscribe(player => this.player1 = player);
    this.playersService.sharePlayer2$.subscribe(player => this.player2 = player);
   }

  ngOnInit() {}
}
