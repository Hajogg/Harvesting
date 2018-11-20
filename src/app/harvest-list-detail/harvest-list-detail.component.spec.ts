import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestListDetailComponent } from './harvest-list-detail.component';

describe('HarvestListDetailComponent', () => {
  let component: HarvestListDetailComponent;
  let fixture: ComponentFixture<HarvestListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvestListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
