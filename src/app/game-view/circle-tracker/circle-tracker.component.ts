import { Component, OnInit, Input } from '@angular/core';
import { Circle } from '../../models/circle.model';

@Component({
  selector: "app-circle-tracker",
  templateUrl: "./circle-tracker.component.html",
  styleUrls: ["./circle-tracker.component.css"]
})
export class CircleTrackerComponent implements OnInit {
  count = 0;
  circles: Circle[] = [];

  addPoints(index) {
    const circle = this.circles[index];
    if (circle.closed) {
      this.count = this.count + circle.number;
    }
    if (circle.once && circle.twice && !circle.closed) { this.circles[index].closed = true; }
    if (circle.once && !circle.twice) { this.circles[index].twice = true; }
    if (!circle.once) { this.circles[index].once = true; }
  }

  selectState(index) {
    if (this.circles[index].closed) { return "closed"; }
    if (this.circles[index].twice) { return "twice"; }
    if (this.circles[index].once) { return "once"; }

  }

  constructor() {
    const self = this;
    function createCircles() {
      for (let i = 15; i < 22; i++) {
        const circle = new Circle(i, 0);
        self.circles.push(circle);
      }
    }
    createCircles();
  }

  ngOnInit() {}
}
