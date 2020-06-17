import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Problem } from '../models/Problem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  constructor(private http: HttpClient) {}

  // get Problems
  getProblems(): Observable<Problem[]> {
    return this.http.get<Problem[]>('../../maths-club-pack/problems.json');
  }
}
