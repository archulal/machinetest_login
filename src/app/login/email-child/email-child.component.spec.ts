import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailChildComponent } from './email-child.component';

describe('EmailChildComponent', () => {
  let component: EmailChildComponent;
  let fixture: ComponentFixture<EmailChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
