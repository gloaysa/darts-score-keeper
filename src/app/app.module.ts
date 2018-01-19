import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule} from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { ScoreTrackerComponent } from "./score-tracker/score-tracker.component";
import { HttpModule } from '@angular/http';
import { ScoreTableComponent } from './score-tracker/score-table/score-table.component';
import { GameViewComponent } from './game-view/game-view.component';
import { CircleTrackerComponent } from "./game-view/circle-tracker/circle-tracker.component";
import { PlayerComponent } from './game-view/player/player.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayersDataService } from '../shared/playersdata.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScoreTrackerComponent,
    ScoreTableComponent,
    GameViewComponent,
    CircleTrackerComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpModule,
    FormsModule
  ],
  providers: [PlayersDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
