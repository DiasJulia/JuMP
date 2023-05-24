import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxogramComponent } from './fluxogram.component';

describe('FluxogramComponent', () => {
  let component: FluxogramComponent;
  let fixture: ComponentFixture<FluxogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
