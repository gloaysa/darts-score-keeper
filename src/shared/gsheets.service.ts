import { Injectable } from "@angular/core";
import { GoogleApiService } from "ng-gapi";
import { environment } from "../environments/environment";

@Injectable()
export class GSheetsService {
  params = {
    spreadsheetId: environment.fileID,
    ranges: environment.range,
    valueInputOption: "USER_ENTERED"
  };

  valueRangeBody = {};

  request = gapi.client.sheets.spreadsheets.values.update(
    this.params,
    this.valueRangeBody
  );

  constructor(gapiService: GoogleApiService) {
    gapiService.onLoad().subscribe(() => {
      this.request.then(res => console.log("res es:", res));
    });
  }
}
