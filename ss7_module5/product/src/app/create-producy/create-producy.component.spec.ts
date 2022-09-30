import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProducyComponent } from './create-producy.component';

describe('CreateProducyComponent', () => {
  let component: CreateProducyComponent;
  let fixture: ComponentFixture<CreateProducyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProducyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProducyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
