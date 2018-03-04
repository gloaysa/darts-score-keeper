import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './game-view/player/player.component';
import { ScoreTrackerComponent } from './score-tracker/score-tracker.component';
import { GameViewComponent } from './game-view/game-view.component';
import { CircleTrackerComponent } from './game-view/player/circle-tracker/circle-tracker.component';

const appRoutes: Routes = [
  {
    path: "score",
    component: ScoreTrackerComponent
  },
  {
    path: "",
    component: GameViewComponent,
    children: [
      {
        path: "",
        component: PlayerComponent
      },
      {
        path: "game",
        component: CircleTrackerComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ) // <-- debugging purposes only
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
