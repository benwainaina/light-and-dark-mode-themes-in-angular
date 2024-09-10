import { inject, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * If you have other modes in your applications, maybe specific to colors,
 * you can add them in this type
 */
export type TMode = 'light' | 'dark';

export const modeUtility = () => {
  const renderer2: Renderer2 = inject(Renderer2);
  const currentMode$: BehaviorSubject<TMode> = new BehaviorSubject<TMode>(
    'light'
  );

  const updateRootMode = (oldMode: TMode | '', newMode: TMode) => {
    renderer2.removeClass(document.body, oldMode);
    renderer2.addClass(document.body, newMode);
  };

  /**
   * on initialized, set the default mode
   */
  updateRootMode('light', 'light');

  return () => ({
    setMode: (mode: TMode) => {
      updateRootMode(currentMode$.value, mode);
      currentMode$.next(mode);
    },
    getMode: () => currentMode$,
  });
};
