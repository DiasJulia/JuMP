import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessoStats } from '../types/ProcessoStats';
import { of } from 'rxjs';

@Injectable()
export class FluxogramApi {
  constructor(private readonly http: HttpClient) {}

  public fetchProcessosStats() {
    return this.http.get<ProcessoStats[]>(
      `http://localhost:8000/api/processos/stats/`
    );
  }
}
