import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type TMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  private rendererFactory: RendererFactory2 = inject(RendererFactory2);
  private _renderer2: Renderer2 = this.rendererFactory.createRenderer(
    null,
    null
  );
  private _currentMode$: BehaviorSubject<TMode> = new BehaviorSubject<TMode>(
    'dark'
  );

  constructor() {
    this._updateRootMode('dark', 'dark');
  }

  private _updateRootMode = (oldMode: TMode | '', newMode: TMode) => {
    this._renderer2.removeClass(document.body, oldMode);
    this._renderer2.addClass(document.body, newMode);
  };

  public setMode(mode: TMode): void {
    this._updateRootMode(this._currentMode$.value, mode);
    this._currentMode$.next(mode);
  }

  public getMode(): Observable<TMode> {
    return this._currentMode$;
  }
}
