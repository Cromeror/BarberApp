import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {
  NzButtonModule,
  NzDividerModule,
  NzGridModule,
  NzIconModule,
  NzLayoutModule,
  NzMenuModule,
  NzTableModule
} from 'ng-zorro-antd';
import {RouterModule, Routes} from '@angular/router';
import {ServiceManagementComponent} from './service-management/service-management.component';
import {DialogFormServiceModule} from '../dialog-form-service/dialog-form-service.module';
import {ServicesService} from '../api/services.service';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: 'add',
        children: [
          {path: 'service', component: ServiceManagementComponent},
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent, ServiceManagementComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    NzButtonModule,
    DialogFormServiceModule
  ],
  providers: [ServicesService]
})
export class DashboardModule {
}
