import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientLoginMethodComponent} from './client-login-method.component';
import {NzButtonModule, NzGridModule, NzIconModule, NzInputModule} from 'ng-zorro-antd';
import {NzSpaceModule} from 'ng-zorro-antd/space';


@NgModule({
  declarations: [ClientLoginMethodComponent],
  exports: [
    ClientLoginMethodComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzSpaceModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule
  ]
})
export class ClientLoginMethodModule {
}
