import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFeedbackComponent } from './no-feedback.component';

describe('NoFeedbackComponent', () => {
  let component: NoFeedbackComponent;
  let fixture: ComponentFixture<NoFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoFeedbackComponent]
    });
    fixture = TestBed.createComponent(NoFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
