import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleDriveProvider } from '../shared/spreadsheet.module';
import { SharedModule } from '../shared/shared.module';
import { ScoreTableComponent } from './score-table/score-table.component';
import { ScoreTrackerComponent } from './score-tracker.component';

@NgModule({
  imports: [
    SharedModule
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
export class ScoreTrackerModule { }