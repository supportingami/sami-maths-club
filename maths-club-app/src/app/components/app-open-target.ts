import { Component, inject } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

/**
 * Show a link to open the app in native platform version, using dynamic app link
 */
@Component({
  selector: "app-open-target",
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
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
export class AppOpenTargetComponent {
  appDynamicLink = "https://samimathsclub.page.link/home";

  private _bottomSheetRef = inject<MatBottomSheetRef<AppOpenTargetComponent>>(
    MatBottomSheetRef
  );

  dismiss() {
    this._bottomSheetRef.dismiss();
  }
}
