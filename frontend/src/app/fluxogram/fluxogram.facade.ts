import { Injectable } from '@angular/core';
import { FluxogramState } from './state/fluxogram-state/fluxogram.state';
import { FluxogramApi } from './api/fluxogram.api';
import { ImageApiService } from '../shared/services/image-api.service';

@Injectable()
export class FluxogramFacade {
  public constructor(
    private readonly state: FluxogramState,
    private readonly api: FluxogramApi,
    private readonly imageApi: ImageApiService
  ) {}

  public fetchProcessosStats() {
    this.api.fetchProcessosStats().subscribe((processoStats) => {
      this.state.setProcessoStats(processoStats);
    });
  }

  public getProcessoStats() {
    return this.state.getProcessoStats();
  }

  public fetchSVG() {
    this.imageApi.getFlowGraph().subscribe((svg) => {
      this.state.setSVG(svg as string);
    });
  }

  public getSVG() {
    return this.state.getSVG();
  }
}
