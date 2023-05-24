import { Injectable } from '@angular/core';
import { FluxogramState } from './state/fluxogram-state/fluxogram.state';
import { FluxogramApi } from './api/fluxogram.api';

@Injectable()
export class FluxogramFacade {
  public constructor(
    private readonly state: FluxogramState,
    private readonly api: FluxogramApi
  ) {}

  public fetchProcessosStats() {
    this.api.fetchProcessosStats().subscribe((processoStats) => {
      this.state.setProcessoStats(processoStats);
      console.log(processoStats);
    });
  }

  public getProcessoStats() {
    return this.state.getProcessoStats();
  }
}
