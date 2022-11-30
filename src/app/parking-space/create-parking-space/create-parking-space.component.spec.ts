import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParkingSpaceComponent } from './create-parking-space.component';

describe('CreateParkingSpaceComponent', () => {
  let component: CreateParkingSpaceComponent;
  let fixture: ComponentFixture<CreateParkingSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParkingSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateParkingSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
