import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { GoogleDriveProvider } from '../spreadsheet.module';
import { Player } from '../models/player.model';

@Injectable()
export class PlayersService {
  private player1 = new Subject<string>();
  private player2 = new Subject<string>();
  private playersData = new Subject<string>();

  public sharePlayer1$ = this.player1.asObservable();
  public sharePlayer2$ = this.player2.asObservable();
  public sharePlayersData$ = this.playersData.asObservable();

  constructor(private http: Http) {
    this.loadPlayersData();
  }

  selectPlayers(player1, player2) {
    player1 ? this.player1.next(player1) : this.player2.next(player2);
  }

  updatePlayersData(newData: Array<Player>) {
    this.playersData.next(JSON.stringify(newData));
  }

  loadPlayersData() {
    return this.http.get(environment.sheetURL).map(table => {
      const tableLines = table.json().values;
      const players: Player[] = [];
      if (tableLines && tableLines.length > 0) {
        tableLines.forEach((line: String[], index: number) => {
          const player: Player = this.createPlayerObject(line, index);
          players.push(player);
        });
      }
      this.playersData.next(JSON.stringify(players));
    });
  }

  createPlayerObject(line: String[], index: number) {
    let player: Player;
    const pos: number = index + 1;
    const name: String = line[0];
    const points: String = line[1];
    player = new Player(pos, name, points);
    return player;
  }

}
