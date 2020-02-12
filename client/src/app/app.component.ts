import { Component } from "@angular/core";
import { Shared } from "@shared/shared.model";
import * as io from "socket.io-client";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = Shared.appName;

  socket = io();
}
