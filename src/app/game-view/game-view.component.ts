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
  player1: string;
  player2: string;

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
