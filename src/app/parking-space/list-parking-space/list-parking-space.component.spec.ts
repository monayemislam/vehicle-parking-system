import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParkingSpaceComponent } from './list-parking-space.component';

describe('ListParkingSpaceComponent', () => {
  let component: ListParkingSpaceComponent;
  let fixture: ComponentFixture<ListParkingSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParkingSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListParkingSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
