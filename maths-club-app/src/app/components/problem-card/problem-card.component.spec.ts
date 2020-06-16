import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemCardComponent } from './problem-card.component';

describe('ProblemCardComponent', () => {
  let component: ProblemCardComponent;
  let fixture: ComponentFixture<ProblemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
