import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { GoogleDriveProvider } from '../spreadsheet.module';
import { Http, Response } from '@angular/http';
import { Player } from '../models/player.model';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlayersDataService {
  private player1 = new BehaviorSubject<Player>(<Player>{});
  private player2 = new BehaviorSubject<Player>(<Player>{});
  private playersData = new BehaviorSubject<Array<Player>>(<Array<Player>>[]);

  public sharePlayer1$ = this.player1.asObservable();
  public sharePlayer2$ = this.player2.asObservable();
  public sharePlayersData$ = this.playersData.asObservable();

  constructor(private http: Http) {
    this.loadPlayersData().subscribe();
  }

  selectPlayers(player1, player2) {
    player1 ? this.player1.next(player1) : this.player2.next(player2);
  }

  updatePlayersData(newData: Array<Player>) {
    this.playersData.next(newData);
  }

  loadPlayersData() {
    return this.http.get(environment.sheetURL).map(res => {
      const data = res.json().values;
      const returnArray = [];
      if (data && data.length > 0) {
        data.forEach((entry: Array<string>, index: number) => {
          let obj: Player;
          const pos = index + 1;
          const name = entry[0];
          const points = entry[1];
          obj = new Player(pos, name, points);
          returnArray.push(obj);
        });
      }
      this.playersData.next(returnArray);
    });
  }

}
