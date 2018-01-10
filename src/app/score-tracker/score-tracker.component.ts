import { Component, OnInit } from '@angular/core';
import { GoogleDriveProvider} from './spreadsheet.module';

@Component({
  selector: "app-score-tracker",
  templateUrl: "./score-tracker.component.html",
  styleUrls: ["./score-tracker.component.css"],
  providers: [GoogleDriveProvider]
})
export class ScoreTrackerComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
