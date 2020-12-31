import { Component, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";

/**
 * Show a link to open the app in native platform version, using dynamic app link
 */
@Component({
  selector: "app-open-target",
  template: `
    <div>
      <h2>Open With...</h2>
      <a [href]="appDynamicLink" target="_blank" rel="noopener">
        <div class="open-option">
          <img
            class="open-icon"
            src="assets/icon.png"
            style="border-radius:6px"
          />
          <h3>Maths Club App</h3>
          <button mat-raised-button color="primary">Open</button>
        </div>
      </a>
      <div class="open-option" (click)="dismiss()">
        <mat-icon class="open-icon">language</mat-icon>
        <h3>Browser</h3>
        <button mat-stroked-button>Continue</button>
      </div>
      <div class="spacer"></div>
    </div>
  `,
  styles: [
    `
      .open-option {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }
      h3 {
        margin-bottom: 0;
        flex: 1;
        text-align: left;
        margin-left: 1rem;
      }
      a {
        text-decoration: none;
        color: unset;
      }
      button {
        width: 90px;
      }
      .open-icon {
        font-size: 32px;
        height: 32px;
        width: 32px;
      }
      .spacer {
        height: 1rem;
      }
    `,
  ],
})
export class AppOpenTargetComponent implements OnInit {
  appDynamicLink = "https://samimathsclub.page.link/home";
  constructor(private _bottomSheet: MatBottomSheet) {}

  dismiss() {
    this._bottomSheet.dismiss();
  }

  ngOnInit() {}
}
