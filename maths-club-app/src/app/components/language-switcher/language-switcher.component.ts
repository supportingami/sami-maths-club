import { Component, OnInit } from "@angular/core";

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
  selected = "";
  constructor() {}

  ngOnInit(): void {}

  onSelect(l) {
    console.log("Selected", l.viewValue);
    this.selected = l.value;
  }
}
