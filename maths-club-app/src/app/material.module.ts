import { NgModule } from "@angular/core";

import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatLegacyListModule as MatListModule } from "@angular/material/legacy-list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select";
import { DomSanitizer } from "@angular/platform-browser";

@NgModule({
  exports: [
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
  ],
})
export class MaterialModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    const customIcons = [
      "facilitator-notes",
      "facilitator-notes-outline",
      "maths-club-logo",
    ];
    customIcons.forEach((iconName) => {
      iconRegistry.addSvgIcon(
        `sami-${iconName}`,
        sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${iconName}.svg`)
      );
    });
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
