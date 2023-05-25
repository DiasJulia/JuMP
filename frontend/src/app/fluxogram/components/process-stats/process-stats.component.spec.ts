import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessStatsComponent } from './process-stats.component';

describe('ProcessStatsComponent', () => {
  let component: ProcessStatsComponent;
  let fixture: ComponentFixture<ProcessStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
