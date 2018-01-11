import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule} from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { ScoreTrackerComponent } from "./score-tracker/score-tracker.component";
import { HttpModule } from '@angular/http';
import { ScoreTableComponent } from './score-tracker/score-table/score-table.component';
import { GameViewComponent } from './game-view/game-view.component';

const appRoutes: Routes = [
  { path: "score", component: ScoreTrackerComponent },
  { path: "play", component: GameViewComponent }
];


@NgModule({
  declarations: [AppComponent, ScoreTrackerComponent, ScoreTableComponent, GameViewComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
