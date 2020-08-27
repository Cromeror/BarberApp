import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {RouterModule, Routes} from '@angular/router';
import {NzGridModule, NzLayoutModule} from 'ng-zorro-antd';
import {DefaultHeaderModule} from '../default-header/default-header.module';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    ]
  },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzLayoutModule,
    NzGridModule,
    DefaultHeaderModule
  ]
})
export class AuthModule {
}
