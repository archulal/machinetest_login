import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TootbarComponent } from './tootbar.component';

describe('TootbarComponent', () => {
  let component: TootbarComponent;
  let fixture: ComponentFixture<TootbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TootbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TootbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
