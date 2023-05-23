import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { FluxogramComponent } from './pages/fluxogram/fluxogram.component';

const routes: Routes = [
  {
    path: 'analysis',
    component: AnalysisComponent,
  },
  {
    path: 'fluxogram',
    component: FluxogramComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalysisRoutingModule {}
