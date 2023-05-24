import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FluxogramComponent } from './pages/fluxogram/fluxogram.component';

const routes: Routes = [
  {
    path: 'fluxogram',
    component: FluxogramComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FluxogramRoutingModule {}
