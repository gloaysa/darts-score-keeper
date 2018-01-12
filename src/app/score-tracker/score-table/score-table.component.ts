import { Component, OnInit, ViewChild } from "@angular/core";
import { GoogleDriveProvider } from "../../spreadsheet.module";

import { MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: "app-score-table",
  templateUrl: "./score-table.component.html",
  styleUrls: ["./score-table.component.css"]
})
export class ScoreTableComponent implements OnInit {
  results: Array<object>;
  fileID = "12jGE_vFwYWrwlVcQt-dTqBx-KtxR3RFe9ooMRAxYK3k";
  APIkey = "AIzaSyAN6YQLjtsM1WsxC1_yzjxcmigmOu-jDGI";
  range = "A2%3AB20";

  displayedColumns = ["position", "player", "points"];
  dataSource: MatTableDataSource<object>;

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(gDrive: GoogleDriveProvider) {
    gDrive.load(this.fileID, this.range, this.APIkey).then(
      data => {
        this.results = data;
        this.dataSource = new MatTableDataSource(this.results);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
