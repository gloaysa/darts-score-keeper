import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameViewComponent } from './game-view.component';

import { AppRoutingModule } from '../app-routing.module';
import { GoogleDriveProvider } from '../spreadsheet.module';
import { PlayerComponent } from './player/player.component';
import { CircleTrackerComponent } from './circle-tracker/circle-tracker.component';
import { AppModule } from '../app.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  declarations: [
    GameViewComponent,
    PlayerComponent,
    CircleTrackerComponent
  ],
  exports: [
    GameViewComponent,
    PlayerComponent,
    CircleTrackerComponent
  ],
  providers: [GoogleDriveProvider]
})
export class GameViewModule { }
