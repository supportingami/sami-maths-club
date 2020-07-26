import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AppService } from "src/app/services/app.service";
import { MatSelectChange } from "@angular/material/select";

interface Language {
  value: string;
  label: string;
}

@Component({
  selector: "app-language-switcher",
  templateUrl: "./language-switcher.component.html",
  styleUrls: ["./language-switcher.component.scss"],
})
export class LanguageSwitcherComponent {
  languages: Language[] = [
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
  ];
  language: Language;
  constructor(
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.appService.routeParams$.subscribe((params) => {
      if (params.lang !== this.language?.value) {
        this.setCurrentLanguage(params.lang);
      }
    });
  }

  selectionChanged(e: MatSelectChange) {
    const oldLang = this.appService.routeParams$.value.lang;
    const selected: Language = e.value;
    const newLang = selected.value;
    const newUrl = window.location.pathname.replace(oldLang, newLang);
    this.router.navigate([newUrl], {
      relativeTo: this.route,
      replaceUrl: true,
    });
  }

  setCurrentLanguage(languageCode: string = "en") {
    this.language = this.languages.find((l) => l.value === languageCode);
  }

  compareObjects(o1: Language, o2: Language) {
    return o1 && o2 && o1.value === o2.value;
  }
}
