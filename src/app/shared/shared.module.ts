import { NgModule } from "@angular/core";
import { GameViewModule } from "../game-view/game-view.module";
import { ScoreTrackerModule } from "../score-tracker/score-tracker.module";
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { GoogleDriveProvider } from "./spreadsheet.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PlayersService } from "./players.service";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    imports: [
        BrowserAnimationsModule,        
        MaterialModule,
        FlexLayoutModule,
        AppRoutingModule,    
    ],
    exports: [MaterialModule, FlexLayoutModule, BrowserAnimationsModule, AppRoutingModule],
    providers: [GoogleDriveProvider, PlayersService]
})

export class SharedModule { }
