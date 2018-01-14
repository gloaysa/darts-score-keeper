import { Component, OnInit } from "@angular/core";
import { GoogleDriveProvider } from "../spreadsheet.module";

@Component({
  selector: "app-game-view",
  templateUrl: "./game-view.component.html",
  styleUrls: ["./game-view.component.css"]
})
export class GameViewComponent {
  playersData: Array<object>;
  fileID = "12jGE_vFwYWrwlVcQt-dTqBx-KtxR3RFe9ooMRAxYK3k";
  APIkey = "AIzaSyAN6YQLjtsM1WsxC1_yzjxcmigmOu-jDGI";
  range = "A2%3AB20";
  player1 = "Player 1";
  player2 = "Player 2";

  showPlayers(event):void {
    this.player1 = event.player1;
    this.player2 = event.player2;
  }

  changePlayers() {
    const player1 = this.player1;
    this.player1 = this.player2;
    this.player2 = player1;
  }

  constructor(gDrive: GoogleDriveProvider) {
    gDrive.load(this.fileID, this.range, this.APIkey).then(
      data => {
        this.playersData = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
