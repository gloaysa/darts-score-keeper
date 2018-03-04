import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { ScoreTrackerModule } from "../score-tracker/score-tracker.module";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "./material.module";
import { PlayersService } from "./players.service";

@NgModule({
    imports: [
        BrowserAnimationsModule,        
        MaterialModule,
        FlexLayoutModule,
        AppRoutingModule
    ],
    exports: [MaterialModule, FlexLayoutModule, BrowserAnimationsModule, AppRoutingModule],
    providers: [PlayersService]
})

export class SharedModule { }
