import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { Player } from '../models/player.model';

@Injectable()
export class PlayersService {
  private player1 = new Subject<Player>();
  private player2 = new Subject<Player>();
  private playersData = new Subject<Player[]>();
  public sharePlayer1$ = this.player1.asObservable();
  public sharePlayer2$ = this.player2.asObservable();
  public sharePlayersData$ = this.playersData.asObservable();

  constructor(private http: Http) {}

  selectPlayers(player1: Player, player2: Player) {
    player1 ? this.player1.next(player1) : this.player2.next(player2);
  }

  updatePlayersData(newData: Array<Player>) {
    this.playersData.next(newData);
  }

  loadPlayersData() {
    return this.http.get(environment.sheetURL).map(table => {
      const tableLines = table.json().values;
      const players: Player[] = [];
      if (tableLines && tableLines.length > 0) {
        tableLines.forEach((line: string[], index: number) => {
          const player: Player = this.createPlayerObject(line, index);
          players.push(player);
        });
      }
      this.playersData.next(players);
    });
  }

  private createPlayerObject(line: string[], index: number) {
    let player: Player;
    const pos: number = index + 1;
    const name: string = line[0];
    const points: number = parseInt(line[1]);
    player = new Player(pos, name, points);
    return player;
  }
  
}
