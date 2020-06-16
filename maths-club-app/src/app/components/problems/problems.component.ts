import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { Problem } from '../../models/Problem';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit {

  problems: Problem[];

  constructor(private problemService: ProblemService) { }

  ngOnInit(): void {
    this.problemService.getProblems().subscribe(problems => {
      this.problems = problems;

      console.log("Problems");
    });
  }

}
