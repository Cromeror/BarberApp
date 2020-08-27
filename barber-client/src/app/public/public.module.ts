import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterClientModule} from './register-client/register-client.module';
import {RouterModule, Routes} from '@angular/router';
import {RegisterClientComponent} from './register-client/register-client.component';

const routes: Routes = [
  {path: '', component: RegisterClientComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RegisterClientModule
  ]
})
export class PublicModule {
}
