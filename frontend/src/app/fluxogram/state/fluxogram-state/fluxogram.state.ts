import { Injectable } from '@angular/core';
import { ProcessoStats } from '../../types/ProcessoStats';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FluxogramState {
  private readonly processoStats = new BehaviorSubject([] as ProcessoStats[]);
  private readonly SVG = new BehaviorSubject('' as string);

  public getProcessoStats() {
    return this.processoStats.asObservable();
  }

  public setProcessoStats(processoStats: ProcessoStats[]) {
    this.processoStats.next(processoStats);
  }

  public getSVG() {
    return this.SVG.asObservable();
  }

  public setSVG(svg: string) {
    this.SVG.next(svg);
  }
}
