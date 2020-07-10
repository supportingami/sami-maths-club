import { Component, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
  title = "SAMI Maths Club App";
  mobileWidthQuery: MediaQueryList;

  private mobileWidthQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileWidthQuery = media.matchMedia("(max-width: 990px)");
    this.mobileWidthQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileWidthQuery.addListener(this.mobileWidthQueryListener);
  }

  ngOnDestroy() {
    this.mobileWidthQuery.removeListener(this.mobileWidthQueryListener);
  }
}
