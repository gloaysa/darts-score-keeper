import { Component, OnInit } from "@angular/core";
import { GoogleDriveProvider } from "../spreadsheet.module";
import { PlayersDataService } from "../shared/playersdata.service";
import { playersData } from "../models/playersData";

@Component({
  selector: "app-game-view",
  templateUrl: "./game-view.component.html",
  styleUrls: ["./game-view.component.css"],
  providers: [PlayersDataService]
})
export class GameViewComponent {
  private player1 = "Player 1";
  private player2 = "Player 2";

  changePlayers() {
    const player1 = this.player1;
    this.player1 = this.player2;
    this.player2 = player1;
  }

  constructor(private playersService: PlayersDataService) {
    console.log("GAME VIEW COMPONENT");
    this.playersService.sharePlayer1$.subscribe(player => (this.player1 = player));
    this.playersService.sharePlayer2$.subscribe(player => (this.player2 = player));
  }
}
