import { Component } from '@angular/core';
import * as d3 from 'd3';
import { ProcessoStats } from '../../types/ProcessoStats';
import { FluxogramFacade } from '../../fluxogram.facade';

@Component({
  selector: 'app-fluxogram',
  templateUrl: './fluxogram.component.html',
  styleUrls: ['./fluxogram.component.scss'],
})
export class FluxogramComponent {
  svg: any;

  movements_count = 0;
  process_count = 0;
  group_process_count = 0;
  avgCaseDuration: Date = new Date();

  processoStats: ProcessoStats = {
    casesCount: 0,
    movimentosCount: 0,
    avgCaseDuration: 0,
    avgMovimentoDuration: 0,
    avgMovimentosPerCase: 0,
  };

  constructor(facade: FluxogramFacade) {
    facade.getProcessoStats().subscribe((processoStats) => {
      this.processoStats = processoStats[0];
      const caseDuration = new Date(this.processoStats.avgCaseDuration);
      const baseDate = new Date(0);
      this.avgCaseDuration.setFullYear(
        caseDuration.getFullYear() - baseDate.getFullYear()
      );
      this.avgCaseDuration.setMonth(
        caseDuration.getMonth() - baseDate.getMonth()
      );
      this.avgCaseDuration.setDate(caseDuration.getDate() - baseDate.getDate());
      this.avgCaseDuration.setHours(
        caseDuration.getHours() - baseDate.getHours()
      );
      this.avgCaseDuration.setMinutes(
        caseDuration.getMinutes() - baseDate.getMinutes()
      );
    });
  }

  ngOnInit(): void {
    this.createSvg();
  }

  private createSvg(): void {
    d3.select('figure#fluxogram > *').remove();
    this.svg = d3.select('figure#fluxogram').append('svg').append('g');
  }
}
