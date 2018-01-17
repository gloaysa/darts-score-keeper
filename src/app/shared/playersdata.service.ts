import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { GoogleDriveProvider } from '../spreadsheet.module';
import { Http, Response } from '@angular/http';
import { playersData } from '../models/playersData';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class PlayersDataService {
  private player1 = new Subject<string>();
  private player2 = new Subject<string>();
  private playersData = new Subject<string>();

  public sharePlayer1$ = this.player1.asObservable();
  public sharePlayer2$ = this.player2.asObservable();
  public sharePlayersData$ = this.playersData.asObservable();

  constructor(private http: Http) {
    this.loadPlayersData();
  }

  selectPlayers(name1, name2) {
    name1 ? this.player1.next(name1) : this.player2.next(name2);
  }

  updatePlayersData(newData: Array<playersData>) {
    this.playersData.next(JSON.stringify(newData));
  }

  loadPlayersData() {
    return this.http.get(environment.sheetURL).map(res => {
      const data = res.json().values;
      const returnArray = [];
      if (data && data.length > 0) {
        data.forEach((entry: Array<string>, index: number) => {
          let obj: playersData;
          const pos = index + 1;
          const name = entry[0];
          const points = entry[1];
          obj = new playersData(pos, name, points);
          returnArray.push(obj);
        });
      }
      this.playersData.next(JSON.stringify(returnArray));
    });
  }

}
