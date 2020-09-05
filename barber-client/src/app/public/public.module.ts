import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterClientModule} from './register-client/register-client.module';
import {RouterModule, Routes} from '@angular/router';
import {RegisterClientComponent} from './register-client/register-client.component';
import {TicketSelectorComponent} from './ticket-selector/ticket-selector.component';
import {TicketSelectorModule} from './ticket-selector/ticket-selector.module';
import {PublicComponent} from './public.component';
import {NzLayoutModule} from 'ng-zorro-antd';
import {DefaultHeaderModule} from '../default-header/default-header.module';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'ticket', component: TicketSelectorComponent},
      {path: 'register', component: RegisterClientComponent}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RegisterClientModule,
    TicketSelectorModule,
    NzLayoutModule,
    DefaultHeaderModule
  ],
  declarations: [
    PublicComponent
  ]
})
export class PublicModule {
}
