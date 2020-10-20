import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPg3Component } from './register-pg3.component';

describe('RegisterPg3Component', () => {
  let component: RegisterPg3Component;
  let fixture: ComponentFixture<RegisterPg3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPg3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
