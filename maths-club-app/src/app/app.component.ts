import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  NgZone,
  ViewEncapsulation,
} from "@angular/core";
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from "@angular/material/bottom-sheet";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DomSanitizer } from "@angular/platform-browser";
import { LanguageSwitcherComponent } from "./components/language-switcher/language-switcher.component";
import { MatButtonModule } from "@angular/material/button";
import { toSignal } from "@angular/core/rxjs-interop";
import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";

import { environment } from "src/environments/environment";
import { AppService } from "./services/app.service";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { slideTransition } from "./animations";
import { NotificationService } from "./services/notification.service";
import { AnalyticsService } from "./services/analytics.service";
import { SeoService } from "./services/seo.service";

import { AppOpenTargetComponent } from "./components/app-open-target";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [slideTransition],
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    LanguageSwitcherComponent,
    RouterOutlet,
    MatToolbarModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  version = environment.APP_VERSION;

  public params = toSignal(this.appService.routeParams$);

  private _bottomSheet = inject(MatBottomSheet);

  constructor(
    public appService: AppService,
    // ensure seo service initialised
    public seo: SeoService,

    notifications: NotificationService,
    private analytics: AnalyticsService,
    private zone: NgZone,
    private router: Router,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerCustomIcons();

    if (Capacitor.isNativePlatform()) {
      this.configureDeepLinks();
    }
  }

  ngAfterViewInit() {
    // this.notifications.init()
    this.analytics.init();
    if (Capacitor.getPlatform() === "web") {
      this.toggleAppOpenTargetSheet();
    }
  }

  getRouteAnimationState(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
  /**
   * Present a bottom sheet to encourage user to use native version of app if running
   * on mobile
   */
  private toggleAppOpenTargetSheet() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (isMobile && !Capacitor.isNativePlatform()) {
      this._bottomSheet.open(AppOpenTargetComponent);
    }
  }
  private configureDeepLinks() {
    App.addListener("appUrlOpen", (data: any) => {
      this.zone.run(() => {
        const slug = data.url.replace(
          "https://mathsclub.samicharity.co.uk/",
          ""
        );
        if (slug) {
          this.router.navigateByUrl(slug);
        }
      });
    });
  }

  private registerCustomIcons() {
    const customIcons = [
      "facilitator-notes",
      "facilitator-notes-outline",
      "maths-club-logo",
    ];
    customIcons.forEach((iconName) => {
      this.iconRegistry.addSvgIcon(
        `sami-${iconName}`,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${iconName}.svg`
        )
      );
    });
  }
}
