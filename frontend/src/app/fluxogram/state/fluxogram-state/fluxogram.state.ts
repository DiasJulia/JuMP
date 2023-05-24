import { Injectable } from '@angular/core';
import { ProcessoStats } from '../../types/ProcessoStats';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FluxogramState {
  private readonly processoStats = new BehaviorSubject([] as ProcessoStats[]);

  public getProcessoStats() {
    return this.processoStats.asObservable();
  }

  public setProcessoStats(processoStats: ProcessoStats[]) {
    this.processoStats.next(processoStats);
  }
}
