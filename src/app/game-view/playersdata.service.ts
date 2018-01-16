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
  playersData$;

  constructor(private http: Http) {}

   loadPlayersData() {
    return this.http.get(environment.sheetURL).map(res => res.json());
  }


  public setPlayersData(newData: Array<playersData>) {
    this.playersData$ = newData;
  }
}
