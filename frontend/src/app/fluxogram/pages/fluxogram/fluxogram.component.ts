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

  avgCaseDuration = { anos: 0, meses: 0, dias: 0, horas: 0, minutos: 0 };

  processoStats: ProcessoStats = <ProcessoStats>{};

  constructor(facade: FluxogramFacade) {
    facade.getProcessoStats().subscribe((processoStats) => {
      this.processoStats = processoStats[0];
      this.avgCaseDuration.anos = Math.floor(
        this.processoStats.avgCaseDuration / 31104000
      );

      this.processoStats.avgCaseDuration -=
        this.avgCaseDuration.anos * 31104000;

      this.avgCaseDuration.meses = Math.floor(
        this.processoStats.avgCaseDuration / 2592000
      );

      this.processoStats.avgCaseDuration -=
        this.avgCaseDuration.meses * 2592000;

      this.avgCaseDuration.dias = Math.floor(
        this.processoStats.avgCaseDuration / 86400
      );

      this.processoStats.avgCaseDuration -= this.avgCaseDuration.dias * 86400;

      this.avgCaseDuration.horas =
        Math.floor(this.processoStats.avgCaseDuration / 3600) % 24;

      this.processoStats.avgCaseDuration -=
        Math.floor(this.processoStats.avgCaseDuration / 3600) * 3600;

      this.avgCaseDuration.minutos =
        Math.floor(this.processoStats.avgCaseDuration / 60) % 60;

      this.processoStats.avgCaseDuration -=
        Math.floor(this.processoStats.avgCaseDuration / 60) * 60;
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
