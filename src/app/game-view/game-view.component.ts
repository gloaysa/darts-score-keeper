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
export class GameViewComponent implements OnInit {
  public player1: Player;
  public player2: Player;

  changePlayers() {
    const player1 = this.player1;
    this.playersService.selectPlayers(this.player2, undefined);
    this.playersService.selectPlayers(undefined, player1);
  }

  constructor(private playersService: PlayersService) {
    this.playersService.loadPlayersData().subscribe();
  }

  ngOnInit() {
    this.playersService.sharePlayer1$.subscribe(player => this.player1 = player);
    this.playersService.sharePlayer2$.subscribe(player => this.player2 = player);
  }

}
