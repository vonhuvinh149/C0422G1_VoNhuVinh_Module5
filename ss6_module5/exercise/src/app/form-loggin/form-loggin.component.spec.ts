import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLogginComponent } from './form-loggin.component';

describe('FormLogginComponent', () => {
  let component: FormLogginComponent;
  let fixture: ComponentFixture<FormLogginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLogginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
