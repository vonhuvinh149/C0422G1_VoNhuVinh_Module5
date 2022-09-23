import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacilityComponent } from './detail-facility.component';

describe('DetailFacilityComponent', () => {
  let component: DetailFacilityComponent;
  let fixture: ComponentFixture<DetailFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
