import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {NzIconModule, NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {
}
