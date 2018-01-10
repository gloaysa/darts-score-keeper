import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule} from "./material.module";



import { AppComponent } from './app.component';
import { ScoreTrackerComponent } from "./score-tracker/score-tracker.component";

const appRoutes: Routes = [
  { path: "score", component: ScoreTrackerComponent },
  //{ path: "hero/:id", component: HeroDetailComponent },
  //{
  //  path: "heroes",
  //  component: HeroListComponent,
  //  data: { title: "Heroes List" }
  //},
  //{
  //  path: "",
  //  redirectTo: "/heroes",
  //  pathMatch: "full"
  //},
  //{ path: "**", component: PageNotFoundComponent }
];


@NgModule({
  declarations: [AppComponent, ScoreTrackerComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
