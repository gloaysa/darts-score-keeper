import { Component, OnInit } from "@angular/core";
import { GoogleDriveProvider } from "../spreadsheet.module";
import { PlayersDataService } from "./playersdata.service";
import { playersData } from "../models/playersData";

@Component({
  selector: "app-game-view",
  templateUrl: "./game-view.component.html",
  styleUrls: ["./game-view.component.css"],
  providers: [PlayersDataService]
})
export class GameViewComponent {
  playersData: Array<playersData>;
  player1: string;
  player2: string;

  showPlayers(event):void {
    this.player1 = event.player1;
    this.player2 = event.player2;
  }

  changePlayers() {
    const player1 = this.player1;
    this.player1 = this.player2;
    this.player2 = player1;
  }


  constructor() {
  }
}
