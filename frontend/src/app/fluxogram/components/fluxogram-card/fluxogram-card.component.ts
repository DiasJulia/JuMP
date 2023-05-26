import { Component, ElementRef } from '@angular/core';
import { ImageApiService } from 'src/app/shared/services/image-api.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-fluxogram-card',
  templateUrl: './fluxogram-card.component.html',
  styleUrls: ['./fluxogram-card.component.scss'],
})
export class FluxogramCardComponent {
  svg: any;

  constructor(private elementRef: ElementRef, imageApi: ImageApiService) {
    imageApi.getFlowGraph().subscribe((data) => {
      this.svg = data;
      const container = d3
        .select(this.elementRef.nativeElement)
        .select('#fluxogram');
      container.append('section').classed('svg-container', true).html(this.svg);
    });
  }
}
