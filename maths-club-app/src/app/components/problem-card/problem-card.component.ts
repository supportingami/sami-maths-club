import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ALL_PROBLEMS as problems } from '../../../../../maths-club-pack/problems';



@Component({
  selector: 'app-problem-card',
  templateUrl: './problem-card.component.html',
  styleUrls: ['./problem-card.component.scss']
})
export class ProblemCardComponent implements OnInit {

  problem;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.problem = problems[+params.get('slug')];
    })
  }

}
