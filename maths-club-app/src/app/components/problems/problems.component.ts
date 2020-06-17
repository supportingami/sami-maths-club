import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { Problem } from '../../models/Problem';
import { ALL_PROBLEMS } from '../../../../../maths-club-pack/problems';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss'],
})
export class ProblemsComponent implements OnInit {
  all_problems: Problem[] = ALL_PROBLEMS;
  problems;

  constructor() {}

  ngOnInit(): void {
    this.problems = this.all_problems.map((obj) => ({
      ...obj,
      slug: obj.name.toLowerCase().replace(/\s+/g, '-'),
    }));

    console.log(this.problems);
  }
}
