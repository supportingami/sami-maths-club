import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: "analytics-consent",
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `<h2 mat-dialog-title>Terms and Privacy</h2>
    <mat-dialog-content class="mat-typography">
      <p>
        By proceeding you agree to our
        <a routerLink="/app-terms" mat-dialog-close>App Terms</a> and
        <a routerLink="/privacy" mat-dialog-close>Privacy Policy</a>.
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <!-- currently only used for ci -->
      <button
        mat-stroked-button
        [mat-dialog-close]="false"
        cdkFocusInitial
        aria-label="privacy-consent-false"
        style="opacity:0; cursor:auto"
      >
        Do not track
      </button>

      <button
        color="primary"
        mat-stroked-button
        [mat-dialog-close]="true"
        cdkFocusInitial
        aria-label="privacy-consent-true"
      >
        I agree, let's go!
      </button>
    </mat-dialog-actions>`,
})
export class AnalyticsConsentComponent {}
