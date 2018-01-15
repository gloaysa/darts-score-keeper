import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { GoogleDriveProvider } from '../spreadsheet.module';
import { Http, Response } from '@angular/http';
import { playersData } from '../models/playersData';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersDataService {
  playersData$;
  fileID = "12jGE_vFwYWrwlVcQt-dTqBx-KtxR3RFe9ooMRAxYK3k";
  APIkey = "AIzaSyAN6YQLjtsM1WsxC1_yzjxcmigmOu-jDGI";
  range = "A2%3AB20";
  url = "https://sheets.googleapis.com/v4/spreadsheets/" + this.fileID + "/values/" + this.range + "?key=" + this.APIkey;

  constructor(private http: Http) {}

  /* private loadPlayersData() {
    return this.http
      .get(this.url).toPromise()
      .then(this.extractData);
  } */

  public loadPlayersData() {
    return this.http.get(this.url).map(res => res.json());
  }


  private extractData(res: Response): Array<playersData> {
    const body = res.json();
    const data = body.values;
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
    console.log(returnArray);
    return returnArray;
  }

  /* public getPlayersData(): Array<playersData> {
    const self = this;
    let allData: Array<playersData>;
    console.log("before timeout");
    setTimeout(() => {
      this.loadPlayersData().then(function(data) {
      allData = data;
      console.log("data", data);
      self.playersData$ = allData;
      });
    }, 5000);
    console.log("after timeout");
    return this.playersData$;
  } */

  public getPlayersData() {
    return this.playersData$;
  }


  public setPlayersData(newData: Array<playersData>) {
    this.playersData$ = newData;
  }
}
