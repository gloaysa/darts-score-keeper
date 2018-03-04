import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ]
})
export class ScoreTrackerModule { }