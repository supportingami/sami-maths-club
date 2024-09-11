import { Component } from "@angular/core";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectChange, MatSelectModule } from "@angular/material/select";
import {
  LANGUAGE_MAPPING,
  LanguageService,
  ILanguageCode,
} from "src/app/services/language.service";

@Component({
  selector: "app-language-switcher",
  templateUrl: "./language-switcher.component.html",
  styleUrls: ["./language-switcher.component.scss"],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatOptionModule],
})
export class LanguageSwitcherComponent {
  languagesCodes: ILanguageCode[];
  languageLabels = LANGUAGE_MAPPING;
  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.languagesCodes = Object.keys(LANGUAGE_MAPPING) as ILanguageCode[];
  }

  selectionChanged(e: MatSelectChange) {
    const selected: ILanguageCode = e.value;
    if (selected !== this.languageService.activeLanguage()) {
      this.languageService.setLanguage(selected);
    }
  }
}
