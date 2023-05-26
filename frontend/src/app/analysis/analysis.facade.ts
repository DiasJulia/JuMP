import { Injectable } from '@angular/core';
import { AnalysisState } from './state/analysis-state/analysis.state';
import { AnalysisApi } from './api/analysis.api';

@Injectable()
export class AnalysisFacade {
  public constructor(
    private readonly state: AnalysisState,
    private readonly api: AnalysisApi
  ) {}

  public fetchProcessosData() {
    this.api.fetchProcessosData().subscribe((processosData) => {
      this.state.setProcessoData(processosData.cases);
    });
  }

  public fetchProcessosDataByMovimento(movimento: string) {
    this.api.fetchProcessosDataByName(movimento).subscribe((processosData) => {
      this.state.setProcessoData(processosData.cases);
    });
  }

  public getProcessoData() {
    return this.state.getProcessoData();
  }

  public getProcessoDataByMovimento(movimento: string) {
    this.fetchProcessosDataByMovimento(movimento);
    return this.state.getProcessoData();
  }
}
