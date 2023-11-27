import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDdComponent } from './form-dd.component';

describe('FormDdComponent', () => {
  let component: FormDdComponent;
  let fixture: ComponentFixture<FormDdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDdComponent]
    });
    fixture = TestBed.createComponent(FormDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
