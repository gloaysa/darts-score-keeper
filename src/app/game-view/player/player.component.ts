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
  player1: Object;
  player2 = "";

  disableAll() {
    return true;
  }

  selectPlayer(player) {
    this.playersData.forEach(object => {
      if (!this.player1 || (this.player1 && this.player2)) {
        this.playersService.selectPlayers(player, undefined);
      } else {
        this.playersService.selectPlayers(undefined, player);
      }
    });
    this.updatePlayersData();
    console.log(this.playersData)
  }

  selectClassPlayer(name) {
    if (this.player1 === name || this.player2 === name) {
      return true;
    }
  }

  twoPlayersSelected(): boolean {
    if (this.player1 && this.player2) {
      return false;
    } else {
      return true;
    }
  }

  updatePlayersData() {
    this.playersData.forEach(player => {
      if (player.name === this.player1.name || player.name === this.player2.name) {
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
