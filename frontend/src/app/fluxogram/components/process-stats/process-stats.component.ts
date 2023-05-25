import { Component } from '@angular/core';
import { FluxogramFacade } from '../../fluxogram.facade';
import { ProcessoStats } from '../../types/ProcessoStats';

@Component({
  selector: 'app-process-stats',
  templateUrl: './process-stats.component.html',
  styleUrls: ['./process-stats.component.scss'],
})
export class ProcessStatsComponent {
  processoStats: ProcessoStats = <ProcessoStats>{
    avgCaseDuration: 0,
    movimentosCount: 0,
    avgMovimentosPerCase: 0,
    avgMovimentoDuration: 0,
  };

  constructor(facade: FluxogramFacade) {
    facade.getProcessoStats().subscribe((processoStats) => {
      this.processoStats = processoStats[0];
    });
  }

  public getTimeFromSeconds(seconds: number) {
    let response = '';
    let caseDuration = { anos: 0, meses: 0, dias: 0, horas: 0, minutos: 0 };
    caseDuration.anos = Math.floor(seconds / 31104000);
    if (caseDuration.anos > 0) {
      seconds -= caseDuration.anos * 31104000;
      response += `${caseDuration.anos} anos, `;
    }

    caseDuration.meses = Math.floor(seconds / 2592000);
    if (caseDuration.meses > 0) {
      seconds -= caseDuration.meses * 2592000;
      response += `${caseDuration.meses} meses, `;
    }

    caseDuration.dias = Math.floor(seconds / 86400);
    if (caseDuration.dias > 0) {
      seconds -= caseDuration.dias * 86400;
      response += `${caseDuration.dias} dias, `;
    }

    caseDuration.horas = Math.floor(seconds / 3600) % 24;
    if (caseDuration.horas > 0) {
      seconds -= Math.floor(seconds / 3600) * 3600;
      response += `${caseDuration.horas} horas, `;
    }

    caseDuration.minutos = Math.floor(seconds / 60) % 60;
    if (caseDuration.minutos > 0) {
      seconds -= Math.floor(seconds / 60) * 60;
      response += `${caseDuration.minutos} minutos`;
    }

    return response;
  }
}
