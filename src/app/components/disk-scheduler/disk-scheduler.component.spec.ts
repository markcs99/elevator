import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskSchedulerComponent } from './disk-scheduler.component';

describe('DiskSchedulerComponent', () => {
  let component: DiskSchedulerComponent;
  let fixture: ComponentFixture<DiskSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
