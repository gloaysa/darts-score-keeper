import { Component, OnInit } from "@angular/core";
import { PlayersDataService } from "../../shared/playersdata.service";

@Component({
  selector: "app-game-view",
  templateUrl: "./game-view.component.html",
  styleUrls: ["./game-view.component.css"],
  providers: []
})
export class GameViewComponent {
  public player1;
  public player2;

  changePlayers() {
    const player1 = this.player1;
    this.player1 = this.player2;
    this.player2 = player1;
  }

  constructor(private playersService: PlayersDataService) {}

  ngOnInit() {
    this.playersService.sharePlayer1$.subscribe(player => this.player1 = player);
    this.playersService.sharePlayer2$.subscribe(player => this.player2 = player);
  }

}
