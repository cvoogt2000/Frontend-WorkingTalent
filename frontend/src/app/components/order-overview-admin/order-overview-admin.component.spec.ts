import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOverviewAdminComponent } from './order-overview-admin.component';

describe('OrderOverviewAdminComponent', () => {
  let component: OrderOverviewAdminComponent;
  let fixture: ComponentFixture<OrderOverviewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderOverviewAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderOverviewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
