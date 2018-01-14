import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayersDataService } from '../playersdata.service';
import { playersData } from '../../models/playersData';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [PlayersDataService]
})
export class PlayerComponent implements OnInit {
  playersData;
  player1: string;
  player2: string;

  @Output() players = new EventEmitter;

  disableAll() {
    return true;
  }

  selectPlayer(name) {
    if(!this.player1 || this.player1 && this.player2) {
      this.player1 = name;
    } else {
      this.player2 = name;
    }
    this.updatePlayerArray(name);
    this.players.emit({player1: this.player1, player2: this.player2});
  }

  selectClassPlayer(name) {
    if (this.player1 == name || this.player2 == name) {
      return true
    }
  }

  updatePlayerArray(name) {
    const self = this;
    this.playersData.forEach( function(player) {
      if (player.player == self.player1 || player.player == self.player2 ) {
        player.playing = true;
      }
      else {
        player.playing = false;
      }
    });
  }

  constructor(private loadData: PlayersDataService) {
    async loadPlayers() {
      this.playersData = await this.loadData.getPlayersData()
      console.log("playersData", this.playersData);
      
    }
  }

  ngOnInit() {
    console.log("playersData", this.playersData);
    
  }

}
