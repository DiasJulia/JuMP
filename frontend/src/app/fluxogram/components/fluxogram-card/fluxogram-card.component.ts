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

  xStart: number = 0;
  yStart: number = 0;

  xPosition: number = 0;
  yPosition: number = 0;

  constructor(
    private elementRef: ElementRef,
    private imageApi: ImageApiService
  ) {
    imageApi.getFlowGraph().subscribe((data) => {
      this.svg = data;
      const container = d3
        .select(this.elementRef.nativeElement)
        .select('#fluxogram');
      container
        .append('section')
        .classed('svg-container', true)
        .attr('width', '80%')
        .attr('height', '80%')
        .html(this.svg);

      this.svg = container.select('svg');
      this.svg.call(
        d3
          .drag<any, any>()
          .on('start', (event, d) => this.dragStart(event, d))
          .on('drag', (event, d) => this.dragHandler(event, d))
      );
    });
  }

  dragStart = (event: any, d: any) => {
    this.xStart = event.x - this.xPosition;
    this.yStart = event.y - this.yPosition;
  };

  dragHandler = (event: any, d: any) => {
    this.xPosition = event.x - this.xStart;
    this.yPosition = event.y - this.yStart;

    d3.select(this.svg.node()).attr(
      'transform',
      `translate(${this.xPosition}, ${this.yPosition})`
    );
  };
}
