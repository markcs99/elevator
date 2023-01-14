import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatedComponent } from './elevated.component';

describe('ElevatedComponent', () => {
  let component: ElevatedComponent;
  let fixture: ComponentFixture<ElevatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
