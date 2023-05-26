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
    this.imageApi.getFlowGraph().subscribe((data) => {
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

      this.drawIconInNodes();
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

  drawIconInNodes = () => {
    let nodes = d3.selectAll('.node');
    nodes.each((d: any, i: any, n: any) => {
      //append blue circle at the end of each node
      const nodeX = d3.select(n[i]).node().getBBox().x;
      const nodeY = d3.select(n[i]).node().getBBox().y;
      const movimento = d3.select(n[i]).select('a').attr('xlink:title');
      d3.select(n[i])
        .append('a')
        .attr('xlink:href', '/analysis?movimento=' + movimento)
        .attr('xlink:title', 'Análise de ' + movimento)
        .attr('class', 'analysis-link')
        .append('circle')
        .attr('r', 10)
        .attr('fill', 'white')
        .attr('stroke', 'blue')
        .attr('cx', nodeX + 25)
        .attr('cy', nodeY + 18);
      // append exclamation mark in the circle
      //select a with class analysis-link
      d3.select(n[i])
        .select('a[class="analysis-link"]')
        .append('text')
        .attr('x', nodeX + 23)
        .attr('y', nodeY + 24)
        .attr('fill', 'blue')
        .text('!');
    });
  };
}
