import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

//import { ALL_PROBLEMS as problems } from '../../../../../maths-club-pack/problems';

@Component({
  selector: 'app-problem-card',
  templateUrl: './problem-card.component.html',
  styleUrls: ['./problem-card.component.scss'],
})
export class ProblemCardComponent implements OnInit {
  problem;
  slug;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.slug = params.slug;
      console.log('Params', this.slug);
      // this.problem = problems[+params.get('slug')];
    });
    this.problem = await this.http
      .get(`/assets/en/student/` + this.slug + `.md`, { responseType: 'text' })
      .toPromise();
    console.log(this.problem);
  }
}
