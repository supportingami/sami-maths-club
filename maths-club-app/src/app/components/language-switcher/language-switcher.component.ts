import { Component } from "@angular/core";
import { ProblemService } from "../../services/problem.service";
import { Router, ActivationEnd, ActivatedRoute } from "@angular/router";

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
    { value: "fr", label: "French" },
  ];
  language: Language;
  constructor(
    private problemService: ProblemService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    router.events.subscribe((e) => {
      if (e instanceof ActivationEnd) {
        this.setLanguage(e.snapshot.params.lang);
      }
    });
  }
  selectionChanged(e: any) {
    const lang: Language = e.value;
    this.router.navigate(["../", lang.value], {
      relativeTo: this.route,
      replaceUrl: true,
    });
  }

  setLanguage(languageCode: string = "en") {
    this.language = this.languages.find((l) => l.value === languageCode);
    this.problemService.setLanguage(this.language.value);
  }

  compareObjects(o1: Language, o2: Language) {
    return o1 && o2 && o1.value === o2.value;
  }
}
