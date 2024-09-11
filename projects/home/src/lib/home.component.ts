import { Component, inject } from '@angular/core';

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
  public appThemeService: AppThemeService = inject(AppThemeService);
}
