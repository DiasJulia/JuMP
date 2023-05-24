import { Injectable } from '@angular/core';
import { FluxogramState } from './state/fluxogram-state/fluxogram.state';
import { FluxogramApi } from './api/fluxogram.api';

@Injectable()
export class FluxogramFacade {
  public constructor(
    private readonly state: FluxogramState,
    private readonly api: FluxogramApi
  ) {}

  public fetchProcessosData() {
    this.api.fetchProcessosData().subscribe((processosData) => {
      this.state.setProcessoData(processosData);
    });
  }

  public getProcessoData() {
    return this.state.getProcessoData();
  }

  public getProcessosStats() {}
}
