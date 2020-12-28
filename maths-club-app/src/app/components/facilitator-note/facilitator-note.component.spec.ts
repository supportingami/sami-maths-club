import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FacilitatorNoteComponent } from './facilitator-note.component';

describe('FacilitatorNoteComponent', () => {
  let component: FacilitatorNoteComponent;
  let fixture: ComponentFixture<FacilitatorNoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitatorNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
