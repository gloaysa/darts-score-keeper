import { Component, OnInit } from "@angular/core";
import { GoogleDriveProvider } from "../spreadsheet.module";
import { PlayersService } from "../shared/players.service";
import { Player } from "../models/player.model";

@Component({
  selector: "app-game-view",
  templateUrl: "./game-view.component.html",
  styleUrls: ["./game-view.component.css"],
  providers: [PlayersService]
})
export class GameViewComponent {
  public player1 = "Player 1";
  public player2 = "Player 2";

  changePlayers() {
    const player1 = this.player1;
    this.player1 = this.player2;
    this.player2 = player1;
  }

  constructor(private playersService: PlayersService) {
    this.playersService.loadPlayersData().subscribe();
    this.playersService.sharePlayer1$.subscribe(player => this.player1 = player);
    this.playersService.sharePlayer2$.subscribe(player => this.player2 = player);
  }

}
