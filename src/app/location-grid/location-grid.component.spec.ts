import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationGridComponent } from './location-grid.component';

describe('LocationGridComponent', () => {
  let component: LocationGridComponent;
  let fixture: ComponentFixture<LocationGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
