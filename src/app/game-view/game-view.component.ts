import { Component } from "@angular/core";

@Component({
  selector: "app-game-view",
  templateUrl: "./game-view.component.html",
  styleUrls: ["./game-view.component.css"]
})
export class GameViewComponent {
  player1: string = "Guillermo";
  player2: string = "Nacho";

}
