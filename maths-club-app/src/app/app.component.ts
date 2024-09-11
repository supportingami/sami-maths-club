import {
  ChangeDetectionStrategy,
  Component,
  inject,
  NgZone,
  ViewEncapsulation,
} from "@angular/core";
import { AppService } from "./services/app.service";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { slideTransition } from "./animations";

import { environment } from "src/environments/environment";
import { NotificationService } from "./services/notification.service";

import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";
import { StatusBar, Style as StatusBarStyle } from "@capacitor/status-bar";
import { AnalyticsService } from "./services/analytics.service";
import { SeoService } from "./services/seo.service";
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from "@angular/material/bottom-sheet";
import { AppOpenTargetComponent } from "./components/app-open-target";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DomSanitizer } from "@angular/platform-browser";
import { LanguageSwitcherComponent } from "./components/language-switcher/language-switcher.component";
import { MatButtonModule } from "@angular/material/button";
import { toSignal } from "@angular/core/rxjs-interop";

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
export class AppComponent {
  version = environment.APP_VERSION;

  public params = toSignal(this.appService.routeParams$);

  private _bottomSheet = inject(MatBottomSheet);

  constructor(
    public appService: AppService,
    // ensure seo service initialised
    public seo: SeoService,

    notifications: NotificationService,
    analytics: AnalyticsService,
    private zone: NgZone,
    private router: Router,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerCustomIcons();
    // this.notifications.init()
    analytics.init();
    if (Capacitor.isNativePlatform()) {
      // Light text for dark backgrounds.
      StatusBar.setStyle({ style: StatusBarStyle.Dark });
      this.configureDeepLinks();
    } else {
      // SEO only relevant whe not native

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
