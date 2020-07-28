import { Component, ViewEncapsulation } from "@angular/core";
import { AppService } from "./services/app.service";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation, fadeOnChange } from "./route-animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [slideInAnimation, fadeOnChange],
})
export class AppComponent {
  constructor(public appService: AppService) {}
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
