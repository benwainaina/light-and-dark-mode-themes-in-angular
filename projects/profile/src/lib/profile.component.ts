import { Component, inject } from '@angular/core';
import { AppThemeService } from '../../../shared/src/utilities/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-profile',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: 'profile.component.html',
  styleUrl: 'profile.component.scss',
})
export class ProfileComponent {
  public appThemeService: AppThemeService = inject(AppThemeService);
}
