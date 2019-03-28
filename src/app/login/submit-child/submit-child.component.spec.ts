import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitChildComponent } from './submit-child.component';

describe('SubmitChildComponent', () => {
  let component: SubmitChildComponent;
  let fixture: ComponentFixture<SubmitChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
