import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { GoogleDriveProvider } from '../spreadsheet.module';
import { AppModule } from '../app.module';
import { MaterialModule } from '../material.module';
import { ScoreTableComponent } from './score-table/score-table.component';
import { ScoreTrackerComponent } from './score-tracker.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  declarations: [
    ScoreTrackerComponent,
    ScoreTableComponent
  ],
  exports: [
    ScoreTrackerComponent,
    ScoreTableComponent
  ],
  providers: [GoogleDriveProvider]
})
export class ScoreTableModule { }