import {
  Input,
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  OnInit,
  OnChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Processo } from '../../types/Processo';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-analysis-table',
  templateUrl: './analysis-table.component.html',
  styleUrls: ['./analysis-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalysisTableComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() data: readonly Processo[] = [];
  @Input() displayedColumns: string[] = [
    'NPU',
    'movimentos',
    'totalMovimentos',
    'duration',
  ];

  dataSource!: MatTableDataSource<Processo>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    const data = Object.assign([], this.data);
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(): void {
    const data = Object.assign([], this.data);
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
