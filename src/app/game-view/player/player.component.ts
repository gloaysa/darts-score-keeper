import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayersDataService } from '../../shared/playersdata.service';
import { playersData } from '../../models/playersData';
import { async } from '@angular/core/testing';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
  providers: [PlayersDataService]
})
export class PlayerComponent implements OnInit {
  playersData: Array<playersData>;
  player1: string;
  player2: string;
  subs: Subscription;

  @Output() players = new EventEmitter();

  disableAll() {
    return true;
  }

  selectPlayer(name) {
    if (!this.player1 || (this.player1 && this.player2)) {
      this.playersService.selectPlayers(name, undefined);
    } else {
      this.playersService.selectPlayers(undefined, name);
    }
    this.updatePlayerArray(name);
  }

  selectClassPlayer(name) {
    if (this.player1 == name || this.player2 == name) {
      return true;
    }
  }

  updatePlayerArray(name) {
    const self = this;
    this.playersData.forEach(function(player) {
      if (player.player == self.player1 || player.player == self.player2) {
        player.playing = true;
      } else {
        player.playing = false;
      }
    });
  }

  constructor(public playersService: PlayersDataService) {
    this.playersService.loadPlayersData().subscribe(value => this.playersData = value);
    this.playersService.sharePlayer1$.subscribe(player => this.player1 = player);
    this.playersService.sharePlayer2$.subscribe(player => this.player2 = player);
   }

  ngOnInit() {}
}
