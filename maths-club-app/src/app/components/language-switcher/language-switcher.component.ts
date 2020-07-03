import { Component, OnInit } from "@angular/core";
import { ProblemService } from "../../services/problem.service";

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-language-switcher",
  templateUrl: "./language-switcher.component.html",
  styleUrls: ["./language-switcher.component.scss"],
})
export class LanguageSwitcherComponent implements OnInit {
  languages: Language[] = [
    { value: "en", viewValue: "English" },
    { value: "fr", viewValue: "French" },
  ];
  language = "en";
  checked = true;
  constructor(private problemService: ProblemService) {}

  ngOnInit(): void {}

  onSelect() {
    console.log("Selected", this.checked);
    !this.checked ? (this.language = "en") : (this.language = "fr");

    console.log("Language selected", this.language);
    this.problemService.setLanguage(this.language);
  }
}
