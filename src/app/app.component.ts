import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Darts Scorekeeper";

  isSignedIn() {
   return this.userService.isUserSignedIn();
  }

  logIn() {
    this.userService.signIn();
  }

  logOut() {
    this.userService.signOut();
  }

  constructor(private userService: UserService) {}
}
