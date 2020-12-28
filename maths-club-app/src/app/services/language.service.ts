import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { AppService } from "./app.service";

export type ILanguageCode = "en" | "fr";
/** Mapping of language codes to labels */
export const LANGUAGE_MAPPING: { [code in ILanguageCode]: string } = {
  en: "English",
  fr: "Français",
};

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  /** Language code corresponding to current active language */
  activeLanguage$ = new BehaviorSubject<ILanguageCode>(null);

  constructor(
    @Inject(DOCUMENT) private document: any,
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._subscribeToRouteLanguageChanges();
    const userLang = localStorage.getItem("sami_maths_club_language");
    if (userLang) {
      this.setLanguage(userLang as ILanguageCode);
    }
  }

  public setLanguage(languageCode: ILanguageCode = "en") {
    if (LANGUAGE_MAPPING[languageCode]) {
      localStorage.setItem("sami_maths_club_language", languageCode);
      const { pathname } = this.document.location;
      if (pathname === "/") {
        this.router.navigate([languageCode]);
      } else {
        const oldLang = this.appService.routeParams$.value?.lang;
        const newUrl = pathname.replace(oldLang, languageCode);
        this.router.navigate([newUrl], {
          relativeTo: this.route,
          replaceUrl: true,
        });
      }
      this.activeLanguage$.next(languageCode);
    }
  }

  /**
   * Ensure language read from current url correctly
   */
  _subscribeToRouteLanguageChanges() {
    this.appService.routeParams$.subscribe((params) => {
      if (params.lang && params.lang !== this.activeLanguage$.value) {
        this.setLanguage(params.lang as ILanguageCode);
      }
    });
  }
}
