import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playersData: Array<object>;
  player1: string;
  player2: string;

  disableAll() {
    return true;
  }

  selectPlayer(name) {
    if(!this.player1 || this.player1 && this.player2) {
      this.player1 = name;
    } else {
      this.player2 = name;
    }
    this.updatePlayerArray(name);
  }

  selectClassPlayer(name) {
    if (this.player1 == name || this.player2 == name) {
      return true
    }
  }

  updatePlayerArray(name) {
    const self = this;
    this.playersData.forEach( function(player) {
      if (player.player == self.player1 || player.player == self.player2 ) {
        player.playing = true;
      }
      else {
        player.playing = false;
      }
    });
    console.log(this.playersData);
  }

  constructor() { }

  ngOnInit() {
  }

}
