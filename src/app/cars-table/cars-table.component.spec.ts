import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsTableComponent } from './cars-table.component';

describe('CarsTableComponent', () => {
  let component: CarsTableComponent;
  let fixture: ComponentFixture<CarsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
