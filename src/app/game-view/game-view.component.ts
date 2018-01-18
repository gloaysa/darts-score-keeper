import { Component, OnInit } from "@angular/core";
import { PlayersDataService } from "../../shared/playersdata.service";
import { Player } from "../../models/player.model";

@Component({
  selector: "app-game-view",
  templateUrl: "./game-view.component.html",
  styleUrls: ["./game-view.component.css"],
  providers: []
})
export class GameViewComponent {
  private playersData: Array<Player>;
  public player1: Player;
  public player2: Player;

  changePlayers() {

    this.playersData.forEach(player => {
      if (player.player1) {
        player.player1 = !player.player1;
        player.player2 = !player.player2;
        this.playersService.selectPlayers(undefined, player);

      } else if (player.player2) {
        player.player2 = !player.player2;
        player.player1 = !player.player1;
        this.playersService.selectPlayers(player, undefined);

      }
    });
    this.playersService.updatePlayersData(this.playersData);
  }

  constructor(private playersService: PlayersDataService) {}

  ngOnInit() {
    this.playersService.sharePlayersData$.subscribe(data => this.playersData = data);
    this.playersService.sharePlayer1$.subscribe(player => this.player1 = player);
    this.playersService.sharePlayer2$.subscribe(player => this.player2 = player);
  }

}
