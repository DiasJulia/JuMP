import { Component, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { FluxogramFacade } from '../../fluxogram.facade';
import { ProcessoStats } from '../../types/ProcessoStats';

@Component({
  selector: 'app-fluxogram',
  templateUrl: './fluxogram.component.html',
  styleUrls: ['./fluxogram.component.scss'],
})
export class FluxogramComponent {
  ngOnInit(): void {}

  svg: any;
  processoStats: ProcessoStats = <ProcessoStats>{
    avgCaseDuration: 0,
    movimentosCount: 0,
    avgMovimentosPerCase: 0,
    avgMovimentoDuration: 0,
  };

  constructor(private facade: FluxogramFacade) {
    this.facade.getSVG().subscribe((svg) => {
      this.svg = svg;
    });
    this.facade.getProcessoStats().subscribe((processoStats) => {
      this.processoStats = processoStats[0] || this.processoStats;
    });
  }
}
