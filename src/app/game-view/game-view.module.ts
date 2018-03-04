import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameViewComponent } from './game-view.component';

import { AppRoutingModule } from '../app-routing.module';
import { GoogleDriveProvider } from '../shared/spreadsheet.module';
import { PlayerComponent } from './player/player.component';
import { CircleTrackerComponent } from './circle-tracker/circle-tracker.component';
import { AppModule } from '../app.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
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
