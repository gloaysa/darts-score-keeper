import { Component, OnInit } from "@angular/core";

import { MatTableDataSource } from "@angular/material";
import { PlayersDataService } from "../../shared/playersdata.service";
import { Player } from "../../models/player.model";

@Component({
  selector: "app-score-table",
  templateUrl: "./score-table.component.html",
  styleUrls: ["./score-table.component.css"],
  providers: []
})
export class ScoreTableComponent implements OnInit {
  private results;

  displayedColumns = ["position", "player", "points"];
  dataSource: MatTableDataSource<object>;

  orderByPoints = arr => {
    for (let j = 0; j < arr.length; ++j) {
      let iMin = j;
      let i = j;
      for (++i; i < arr.length; ++i) {
        parseInt(arr[i].points) > parseInt(arr[iMin].points) && (iMin = i);
      }
      const position = arr[j].position;
      arr[j].position = arr[iMin].position;
      arr[iMin].position = position;
      [arr[j], arr[iMin]] = [arr[iMin], arr[j]];
    }

    return arr;
  }

  getData() {
    this.playersService.sharePlayersData$.subscribe(data => {
      this.results = data;
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = this.orderByPoints(this.results);
    });
  }

  constructor(private playersService: PlayersDataService) {}

  ngOnInit() {
    this.getData();
  }
}
