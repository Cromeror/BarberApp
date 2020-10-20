import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {
  NzButtonModule, NzDatePickerModule,
  NzDividerModule, NzDropDownModule,
  NzGridModule,
  NzIconModule,
  NzLayoutModule,
  NzListModule,
  NzMenuModule, NzPaginationModule,
  NzPopconfirmModule,
  NzTableModule
} from 'ng-zorro-antd';
import {RouterModule, Routes} from '@angular/router';
import {ServiceManagementComponent} from './service-management/service-management.component';
import {DialogFormServiceModule} from '../dialog-form-service/dialog-form-service.module';
import {ServicesService} from '../api/services.service';
import {TicketManagementComponent} from './ticket-management/ticket-management.component';
import {TicketsService} from '../api/tickets.service';
import {ClientManagementComponent} from './client-management/client-management.component';
import {UserService} from '../api/user.service';
import {DialogEndingServiceModule} from '../dialog-ending-service/dialog-ending-service.module';
import {DialogFormClientModule} from '../dialog-form-client/dialog-form-client.module';
import {SettingsManagementComponent} from './settings-management/settings-management.component';
import {VisitsPipeModule} from './visits-pipe/visits-pipe.module';
import {AccountingComponent} from './accounting/accounting.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: 'add',
        children: [
          {path: 'service', component: ServiceManagementComponent},
        ]
      },
      {
        path: 'management',
        children: [
          {path: 'tickets', component: TicketManagementComponent},
          {path: 'clients', component: ClientManagementComponent},
        ]
      },
      {path: 'accounting', component: AccountingComponent},
      {path: 'settings', component: SettingsManagementComponent}
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent, ServiceManagementComponent, TicketManagementComponent, ClientManagementComponent,
    SettingsManagementComponent, AccountingComponent],
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
    DialogFormServiceModule,
    NzListModule,
    DialogEndingServiceModule,
    DialogFormClientModule,
    NzPopconfirmModule,
    VisitsPipeModule,
    NzPaginationModule,
    NzDropDownModule,
    NzDatePickerModule
  ],
  providers: [ServicesService, TicketsService, UserService]
})
export class DashboardModule {
}
