import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './game-view/player/player.component';
import { ScoreTrackerComponent } from './score-tracker/score-tracker.component';
import { GameViewComponent } from './game-view/game-view.component';

const appRoutes: Routes = [
  {
    path: "score",
    component: ScoreTrackerComponent
  },
  {
    path: "play",
    component: GameViewComponent,
    children: [
      {
        path: "select-player",
        component: PlayerComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
