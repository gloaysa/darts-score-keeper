import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

@Injectable()
export class GoogleDriveProvider {
  data: any = null;

  constructor(public http: Http) {}

  load( id, range, APIkey ) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    const url = "https://sheets.googleapis.com/v4/spreadsheets/" + id + "/values/" + range + "?key=" + APIkey;
    return new Promise(resolve => {
      this.http.get(url)
      .map(res => res.json() )
      .subscribe( data => {
        this.data = data.values;

        const returnArray: Array<any> = [];

        if ( this.data && this.data.length > 0 ) {
          this.data.forEach( ( entry: Array<string>, index: number ) => {
            let obj = {};
            const pos = index + 1;
            const name = entry[0];
            const points = entry[1];
            obj = {position: pos, player: name, points: points, winner: false, playing: false};
            returnArray.push( obj );
            });
          }
          resolve(returnArray);
        });
    });
  }
}

