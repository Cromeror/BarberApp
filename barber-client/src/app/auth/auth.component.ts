import {Component} from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <nz-layout class="app-auth">
      <app-default-header></app-default-header>
      <nz-content nz-row nzJustify="center" nzAlign="middle">
        <router-outlet></router-outlet>
      </nz-content>
    </nz-layout>
  `,
  styles: [`
    .app-auth {
      height: 100vh;
    }
  `]
})
export class AuthComponent {
}
