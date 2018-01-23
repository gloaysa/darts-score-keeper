import { NgModule } from "@angular/core/src/metadata/ng_module";
import { environment } from "../environments/environment";
import { GoogleApiModule, NgGapiClientConfig, NG_GAPI_CONFIG } from 'ng-gapi';

const gapiClientConfig: NgGapiClientConfig = {
  client_id: environment.clientID,
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  scope: ["https://www.googleapis.com/auth/spreadsheets"].join(" ")
};

@NgModule({
  imports: [
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ]
})
export class SheetsModule {
  string: GoogleApiOAuth2TokenObject;
}
