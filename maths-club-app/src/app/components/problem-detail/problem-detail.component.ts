import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { ProblemService } from "../../services/problem.service";
import {fadeOnLoad} from '../../route-animations'

@Component({
  selector: "app-problem-detail",
  templateUrl: "./problem-detail.component.html",
  styleUrls: ["./problem-detail.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeOnLoad]
  
})
export class ProblemDetailComponent implements OnInit{
  constructor(public problemService: ProblemService) {}


  ngOnInit(){
    console.log("Init")
  }
}
