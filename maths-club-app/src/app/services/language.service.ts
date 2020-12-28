import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
  activeLanguage: ILanguageCode;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.setLanguage(localStorage.getItem("sami_maths_club_language") as any);
    this._subscribeToRouteLanguageChanges();
  }

  public setLanguage(languageCode: ILanguageCode) {
    if (LANGUAGE_MAPPING[languageCode]) {
      localStorage.setItem("sami_maths_club_language", languageCode);
      this.activeLanguage = languageCode;
      const { pathname } = this.document.location;
      if (pathname === "/") {
        this.router.navigate([languageCode]);
      } else {
        const oldLang = this.appService.routeParams$.value?.lang;
        const newUrl = pathname.replace(oldLang, this.activeLanguage);
        this.router.navigate([newUrl], {
          relativeTo: this.route,
          replaceUrl: true,
        });
      }
    }
  }

  /**
   * Ensure language read from current url correctly
   */
  _subscribeToRouteLanguageChanges() {
    this.appService.routeParams$.subscribe((params) => {
      if (params.lang && params.lang !== this.activeLanguage) {
        this.setLanguage(params.lang as ILanguageCode);
      }
    });
  }
}
