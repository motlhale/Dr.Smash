import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPg2Component } from './register-pg2.component';

describe('RegisterPg2Component', () => {
  let component: RegisterPg2Component;
  let fixture: ComponentFixture<RegisterPg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPg2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
