import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {es_ES, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import es from '@angular/common/locales/es';
import {RouterModule, Routes} from '@angular/router';
import {RealtimeApiService} from './api/realtime-api.service';

registerLocaleData(es);

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/auth/login'},
  {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'monitor', loadChildren: () => import('./tickets-monitor/tickets-monitor.module').then(m => m.TicketsMonitorModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: NZ_I18N, useValue: es_ES}, RealtimeApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
