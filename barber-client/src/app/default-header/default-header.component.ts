import {Component} from '@angular/core';

@Component({
  selector: 'app-default-header',
  template: `
    <nz-header nz-row nzJustify="center" nzAlign="middle">
      <nz-col nzSpan="24" nzLg="24" nzXl="12">
        <img src="assets/yanior-barber-logo.png" style="height: 42px;"/>
        <img src="assets/yanior-barber.png" style="height: 24px;"/>
      </nz-col>
    </nz-header>`,
  styles: [``]
})
export class DefaultHeaderComponent {
}
