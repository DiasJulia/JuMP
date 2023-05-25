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
    let caseDuration = { anos: 0, meses: 0, dias: 0, horas: 0, minutos: 0 };
    caseDuration.anos = Math.floor(seconds / 31104000);

    seconds -= caseDuration.anos * 31104000;

    caseDuration.meses = Math.floor(seconds / 2592000);

    seconds -= caseDuration.meses * 2592000;

    caseDuration.dias = Math.floor(seconds / 86400);

    seconds -= caseDuration.dias * 86400;

    caseDuration.horas = Math.floor(seconds / 3600) % 24;

    seconds -= Math.floor(seconds / 3600) * 3600;

    caseDuration.minutos = Math.floor(seconds / 60) % 60;

    seconds -= Math.floor(seconds / 60) * 60;

    return `${caseDuration.anos} anos, ${caseDuration.meses} meses, ${caseDuration.dias} dias, ${caseDuration.horas} horas, ${caseDuration.minutos} minutos`;
  }
}
