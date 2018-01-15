import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayersDataService } from '../playersdata.service';
import { playersData } from '../../models/playersData';
import { async } from '@angular/core/testing';

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
  providers: [PlayersDataService]
})
export class PlayerComponent implements OnInit {
  data = this.playersService.loadPlayersData().subscribe(value => {
    console.log(value.values);
    const data = value.values;
    const returnArray = [];
    if (data && data.length > 0) {
      data.forEach((entry: Array<string>, index: number) => {
        let obj: playersData;
        const pos = index + 1;
        const name = entry[0];
        const points = entry[1];
        obj = new playersData(pos, name, points);
        returnArray.push(obj);
      });
    }
    console.log(returnArray);
    this.playersData = returnArray;
  });
  playersData: Array<playersData>;
  player1: string;
  player2: string;

  @Output() players = new EventEmitter();

  disableAll() {
    return true;
  }

  selectPlayer(name) {
    if (!this.player1 || (this.player1 && this.player2)) {
      this.player1 = name;
    } else {
      this.player2 = name;
    }
    this.updatePlayerArray(name);
    this.players.emit({ player1: this.player1, player2: this.player2 });
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

  constructor(public playersService: PlayersDataService) { }

  ngOnInit() {}
}
