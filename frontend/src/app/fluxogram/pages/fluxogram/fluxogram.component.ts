import { Component, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { FluxogramFacade } from '../../fluxogram.facade';

@Component({
  selector: 'app-fluxogram',
  templateUrl: './fluxogram.component.html',
  styleUrls: ['./fluxogram.component.scss'],
})
export class FluxogramComponent {
  ngOnInit(): void {}

  svg: any;

  constructor(private facade: FluxogramFacade) {
    this.facade.getSVG().subscribe((svg) => {
      this.svg = svg;
    });
  }
}
