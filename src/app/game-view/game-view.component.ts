import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
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
  public playing: boolean;
  public numberOfRounds: number;

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

  nexTurn() {
    const turn = this.numberOfRounds - 1;
    this.playersService.updateNumberOfRounds(turn);
    if (this.numberOfRounds === 0) {
      this.playersService.updateGameOver(true);
      this.numberOfRounds = 20;
    }
  }

  checkIfPlaying() {
    this.playersService.playing$.subscribe(playing => this.playing = playing);
    this.cdRef.detectChanges();
  }

  loadDataFromService() {
    this.playersService.sharePlayersData$.subscribe(data => this.playersData = data);
    this.playersService.sharePlayer1$.subscribe(player => this.player1 = player);
    this.playersService.sharePlayer2$.subscribe(player => this.player2 = player);
    this.playersService.numberOfRounds$.subscribe(rounds => this.numberOfRounds = rounds);
  }

  constructor(private playersService: PlayersDataService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadDataFromService();
  }

  ngAfterViewChecked() {
    this.checkIfPlaying();
  }

}
