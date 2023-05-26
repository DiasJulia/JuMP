import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxogramCardComponent } from './fluxogram-card.component';

describe('FluxogramCardComponent', () => {
  let component: FluxogramCardComponent;
  let fixture: ComponentFixture<FluxogramCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxogramCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxogramCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
