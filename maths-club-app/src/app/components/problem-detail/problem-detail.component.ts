import { Component, ViewEncapsulation, ChangeDetectorRef, OnInit } from "@angular/core";
import { ProblemService } from "src/app/services/problem.service";
import { fadeInOut } from "src/app/animations";
import { Capacitor, Plugins } from '@capacitor/core';
const { Share } = Plugins;

@Component({
  selector: "app-problem-detail",
  templateUrl: "./problem-detail.component.html",
  styleUrls: ["./problem-detail.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInOut],
})
export class ProblemDetailComponent implements OnInit {
  markdownReady = false;
  isNative = Capacitor.isNative;
  
  constructor(
    public problemService: ProblemService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(){
    console.log("on init", this.problemService);
  }

  onMarkdownReady() {
    this.markdownReady = true;
    //console.log("on md ready", this.problemService.activeProblem$.value);

    // as markdown can be ready before page fully initialised complete manually trigger
    // change detection to avoid change detection errors
    this.cdr.detectChanges();
  }


  
  async share(){
    if(Capacitor.isNative){
      await Share.share({
        title: this.problemService.activeProblem$.value.title,
        text: "Here's a problem for you to try! If you get stuck there are also notes for facilitators included",
        url: `https://mathsclub.samicharity.co.uk/en/${this.problemService.activeProblem$.value.slug}`,
        dialogTitle: 'Share'
      }).then((success)=>{
        console.log("shared")
      }).catch((err)=>{
        console.log("an error occureed")
      })
    }   
  }
}
