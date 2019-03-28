import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChildComponent } from './password-child.component';

describe('PasswordChildComponent', () => {
  let component: PasswordChildComponent;
  let fixture: ComponentFixture<PasswordChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
