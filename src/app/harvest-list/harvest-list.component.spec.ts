import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestListComponent } from './harvest-list.component';

describe('HarvestListComponent', () => {
  let component: HarvestListComponent;
  let fixture: ComponentFixture<HarvestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
