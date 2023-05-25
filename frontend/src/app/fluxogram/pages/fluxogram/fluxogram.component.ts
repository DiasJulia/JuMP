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

  avgCaseDuration: Date = new Date();

  processoStats: ProcessoStats = <ProcessoStats>{};

  constructor(facade: FluxogramFacade) {
    facade.getProcessoStats().subscribe((processoStats) => {
      this.processoStats = processoStats[0];
      this.avgCaseDuration = new Date(this.processoStats.avgCaseDuration);
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
