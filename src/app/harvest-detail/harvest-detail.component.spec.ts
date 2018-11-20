import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestDetailComponent } from './harvest-detail.component';

describe('HarvestDetailComponent', () => {
  let component: HarvestDetailComponent;
  let fixture: ComponentFixture<HarvestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
