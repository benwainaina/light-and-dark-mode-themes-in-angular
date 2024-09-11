import { Component, inject, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import {
  AppThemeService,
  TMode,
} from '../../projects/shared/src/utilities/theme.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    NgFor,
    NgIf,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public availableModes: Array<TMode> = ['light', 'dark'];
  public currentMode$!: Observable<TMode>;
  public showModePicker: boolean = false;
  public appThemeService: AppThemeService = inject(AppThemeService);

  public toggleModePicker(): void {
    this.showModePicker = !this.showModePicker;
  }

  public onSetMode(mode: TMode): void {
    this.toggleModePicker();
    this.appThemeService.setMode(mode);
  }
}
