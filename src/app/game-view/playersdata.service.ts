import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { GoogleDriveProvider } from '../spreadsheet.module';
import { Http, Response } from '@angular/http';
import { playersData } from '../models/playersData';

@Injectable()
export class PlayersDataService {
    fileID = "12jGE_vFwYWrwlVcQt-dTqBx-KtxR3RFe9ooMRAxYK3k";
    APIkey = "AIzaSyAN6YQLjtsM1WsxC1_yzjxcmigmOu-jDGI";
    range = "A2%3AB20";
    playersData: Array<playersData>

    constructor(gDrive: GoogleDriveProvider) {
        gDrive.load(this.fileID, this.range, this.APIkey).then(
            data => {
                this.playersData = data;
                console.log("en service: ", this.playersData);
            },
            error => {
                console.log(error);
            }
        );
    }

    public getPlayersData() {
        return this.playersData;
    }

    public setPlayersData(newData: Array<playersData>) {
        this.playersData = newData;
    }
}