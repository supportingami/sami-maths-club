import { Component, ViewEncapsulation } from "@angular/core";
import { AppService } from "./services/app.service";
import { RouterOutlet } from "@angular/router";
import { slideTransition } from "./animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [slideTransition],
})
export class AppComponent {
  constructor(public appService: AppService) {}
  getRouteAnimationState(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
