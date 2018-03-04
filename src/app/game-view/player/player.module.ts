import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircleTrackerComponent } from './circle-tracker/circle-tracker.component';
import { SharedModule } from '../../shared/shared.module';
import { PlayerComponent } from './player.component';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        PlayerComponent,
        CircleTrackerComponent
    ],
    exports: [
        PlayerComponent,
        CircleTrackerComponent
    ]
})
export class PlayerModule { }
