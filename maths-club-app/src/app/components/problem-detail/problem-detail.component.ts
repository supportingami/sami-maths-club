import { Component, ViewEncapsulation, ChangeDetectorRef } from "@angular/core";
import { ProblemService } from "src/app/services/problem.service";
import { fadeInOut } from "src/app/animations";
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

@Component({
  selector: "app-problem-detail",
  templateUrl: "./problem-detail.component.html",
  styleUrls: ["./problem-detail.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInOut],
})
export class ProblemDetailComponent {
  markdownReady = false;
  constructor(
    public problemService: ProblemService,
    //private socialSharing: SocialSharing,
    private cdr: ChangeDetectorRef
  ) {}

  onMarkdownReady() {
    this.markdownReady = true;
    // as markdown can be ready before page fully initialised complete manually trigger
    // change detection to avoid change detection errors
    this.cdr.detectChanges();
  }

  async share(){
    await Share.share({
      title: '15 numbers',
      text: 'Real',
      url: 'https://mathsclub.samicharity.co.uk/en/15-game',
      dialogTitle: 'Share with buddies'
    });
  }
}
