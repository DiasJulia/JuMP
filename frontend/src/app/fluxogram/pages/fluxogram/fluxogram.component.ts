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
  avg_process_duration = 0;

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
