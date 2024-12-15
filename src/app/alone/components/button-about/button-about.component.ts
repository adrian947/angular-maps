import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'button-about',
  standalone: true,
  imports: [],
  template: `<button class="btn btn-primary flotting" (click)="goToAbout()">
    About My App
  </button>`,
  styleUrl: './button-about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ButtonAboutComponent {
  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/about']);
  }
}
