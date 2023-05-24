import { APP_INITIALIZER } from '@angular/core';
import { FluxogramFacade } from './fluxogram.facade';

export const fluxogramInitializer =
  (fluxogramFacade: FluxogramFacade) => () => {
    fluxogramFacade.fetchProcessosData();
  };

export const fluxogramInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: fluxogramInitializer,
  multi: true,
  deps: [FluxogramFacade],
};
