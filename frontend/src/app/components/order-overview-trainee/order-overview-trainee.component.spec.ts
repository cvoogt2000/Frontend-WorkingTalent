import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOverviewTraineeComponent } from './order-overview-trainee.component';

describe('OrderOverviewTraineeComponent', () => {
  let component: OrderOverviewTraineeComponent;
  let fixture: ComponentFixture<OrderOverviewTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderOverviewTraineeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderOverviewTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
