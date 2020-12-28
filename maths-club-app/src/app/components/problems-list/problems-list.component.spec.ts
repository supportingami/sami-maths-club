import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ProblemsListComponent } from "./problems-list.component";

describe("ProblemsListComponent", () => {
  let component: ProblemsListComponent;
  let fixture: ComponentFixture<ProblemsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemsListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
