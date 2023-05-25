import { Component } from '@angular/core';
import * as d3 from 'd3';
import { ProcessoStats } from '../../types/ProcessoStats';
import { FluxogramFacade } from '../../fluxogram.facade';
import { ImageApiService } from 'src/app/shared/services/image-api.service';

@Component({
  selector: 'app-fluxogram',
  templateUrl: './fluxogram.component.html',
  styleUrls: ['./fluxogram.component.scss'],
})
export class FluxogramComponent {
  svg: any;

  constructor(imageApi: ImageApiService) {
    imageApi.getFlowGraph().subscribe((data) => {
      this.svg = data;
      d3.select('#fluxogram')
        .append('section')
        .classed('svg-container', true)
        .html(this.svg);
    });
  }

  ngOnInit(): void {}
}
