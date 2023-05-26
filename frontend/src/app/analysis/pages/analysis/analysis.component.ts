import { Component } from '@angular/core';
import { AnalysisFacade } from '../../analysis.facade';
import { Processo } from '../../types/Processo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent {
  selectedMovimento: string = 'A12';
  processoList: Processo[] = [];

  constructor(facade: AnalysisFacade, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.selectedMovimento = params['movimento'];

      if (this.selectedMovimento === undefined) {
        facade.fetchProcessosData();
        facade.getProcessoData().subscribe((processoData) => {
          this.processoList = processoData;
        });
      } else {
        facade
          .getProcessoDataByMovimento(this.selectedMovimento)
          .subscribe((processoData) => {
            this.processoList = processoData;
          });
      }
    });
  }
}
