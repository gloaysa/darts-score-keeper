import { Component, OnInit } from '@angular/core';
import { PlayersDataService } from '../shared/playersdata.service';

@Component({
  selector: "app-score-tracker",
  templateUrl: "./score-tracker.component.html",
  styleUrls: ["./score-tracker.component.css"],
  providers: [PlayersDataService]
})
export class ScoreTrackerComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
