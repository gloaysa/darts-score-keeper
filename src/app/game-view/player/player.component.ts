import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayersService } from '../../shared/players.service';
import { Player } from '../../models/player.model';

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
  providers: []
})
export class PlayerComponent implements OnInit {
  players: Player[];
  player1: Player;
  player2: Player;

  disableAll() {
    return true;
  }

  selectPlayer(player: Player) {
    if (!this.player1 || (this.player1 && this.player2)) {
      this.playersService.selectPlayers(player, undefined);
    } else {
      this.playersService.selectPlayers(undefined, player);
    }
    this.updatePlayerArray();
  }

  selectClassPlayer(player: Player) {
    if (this.player1 === player || this.player2 === player) {
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

  updatePlayerArray() {
    this.players.forEach((player: Player) => {
      if (player.name === this.player1.name) {
        player.player1 = true;
        player.playing = true;
      } else if (this.player2 && player.name === this.player2.name) {
        player.player2 = true;
        player.playing = true;
      } else {
        player.playing = false;
      }
    });
    this.playersService.updatePlayersData(this.players);
  }

  constructor(private playersService: PlayersService) {
    this.playersService.sharePlayersData$.subscribe(data => this.players = data);
   }

   ngOnInit() {
    this.playersService.sharePlayer1$.subscribe(player => this.player1 = player);
    this.playersService.sharePlayer2$.subscribe(player => this.player2 = player);
   }

}
