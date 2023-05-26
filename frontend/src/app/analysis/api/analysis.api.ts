import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Processo } from '../types/Processo';
import { of } from 'rxjs';

@Injectable()
export class AnalysisApi {
  constructor(private readonly http: HttpClient) {}

  public fetchProcessosData() {
    return this.http.get<{ cases: Processo[] }>(`/api/processos/`);
  }

  public fetchProcessosDataByName(name: string) {
    return this.http.post<{ cases: Processo[] }>(`/api/processos/`, {
      movimento: name,
    });
  }
}
