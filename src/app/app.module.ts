import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { GoogleDriveProvider } from './shared/spreadsheet.module';
import { SharedModule } from './shared/shared.module';
import { GameViewModule } from './game-view/game-view.module';
import { ScoreTrackerModule } from './score-tracker/score-tracker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    GameViewModule,
    ScoreTrackerModule
  ],
  providers: [GoogleDriveProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
