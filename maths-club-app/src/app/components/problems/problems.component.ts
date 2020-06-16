import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { Problem } from '../../models/Problem';
import { ALL_PROBLEMS } from '../../../../../maths-club-pack/problems';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit {

  problems: Problem[] = ALL_PROBLEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
