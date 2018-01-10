import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule
} from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTableModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTableModule]
})
export class MaterialModule {}
