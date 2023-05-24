import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxogramComponent } from './pages/fluxogram/fluxogram.component';
import { FluxogramState } from './state/fluxogram-state/fluxogram.state';
import { FluxogramApi } from './api/fluxogram.api';
import { FluxogramFacade } from './fluxogram.facade';
import { fluxogramInitializerProvider } from './fluxogram.initializer';
import { FluxogramRoutingModule } from './fluxogram-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  providers: [
    FluxogramState,
    FluxogramApi,
    FluxogramFacade,
    fluxogramInitializerProvider,
  ],
  declarations: [FluxogramComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    FluxogramRoutingModule,
  ],
})
export class FluxogramModule {}
