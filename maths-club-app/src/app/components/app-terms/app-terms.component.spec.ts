import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppTermsComponent } from './app-terms.component';

describe('AppTermsComponent', () => {
  let component: AppTermsComponent;
  let fixture: ComponentFixture<AppTermsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
