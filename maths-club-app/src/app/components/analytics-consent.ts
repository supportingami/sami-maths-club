import { Component } from "@angular/core";

@Component({
  selector: "analytics-consent",
  template: `<h2 mat-dialog-title>Terms and Privacy</h2>
    <mat-dialog-content class="mat-typography">
      <p>
        By proceeding you agree to our
        <a routerLink="/app-terms" mat-dialog-close>App Terms</a> and
        <a routerLink="/privacy" mat-dialog-close>Privacy Policy</a>.
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button
        color="primary"
        mat-stroked-button
        [mat-dialog-close]="true"
        cdkFocusInitial
        aria-label="privacy-consent"
      >
        I agree, let's go!
      </button>
    </mat-dialog-actions>`,
})
export class AnalyticsConsentComponent {}
