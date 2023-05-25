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
      this.setTimeFromSeconds(this.processoStats.avgCaseDuration);
    });
  }

  ngOnInit(): void {
    this.createSvg();
  }

  private createSvg(): void {
    d3.select('figure#fluxogram > *').remove();
    this.svg = d3.select('figure#fluxogram').append('svg').append('g');
  }

  setTimeFromSeconds(seconds: number) {
    this.avgCaseDuration.anos = Math.floor(seconds / 31104000);

    seconds -= this.avgCaseDuration.anos * 31104000;

    this.avgCaseDuration.meses = Math.floor(seconds / 2592000);

    seconds -= this.avgCaseDuration.meses * 2592000;

    this.avgCaseDuration.dias = Math.floor(seconds / 86400);

    seconds -= this.avgCaseDuration.dias * 86400;

    this.avgCaseDuration.horas = Math.floor(seconds / 3600) % 24;

    seconds -= Math.floor(seconds / 3600) * 3600;

    this.avgCaseDuration.minutos = Math.floor(seconds / 60) % 60;

    seconds -= Math.floor(seconds / 60) * 60;
  }
}
