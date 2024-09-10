import { Component, inject } from '@angular/core';
import {
  modeUtility,
  TMode,
} from '../../../shared/src/utilities/theme.utility';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AppThemeService } from '../../../shared/src/utilities/theme.service';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
})
export class HomeComponent {
  public currentMode$: Observable<TMode>;
  public appThemeService: AppThemeService = inject(AppThemeService);

  constructor() {
    const { getMode } = modeUtility()();
    this.currentMode$ = getMode();
  }
}
