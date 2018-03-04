import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { GameViewComponent } from './game-view.component';
import { PlayerModule } from './player/player.module';

@NgModule({
  imports: [
    SharedModule,
    PlayerModule
  ],
  declarations: [
    GameViewComponent
  ],
  exports: [
    GameViewComponent
  ]
})
export class GameViewModule { }
