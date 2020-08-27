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

registerLocaleData(es);

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/auth/login'},
  {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'queue-system', loadChildren: () => import('./queue-view/queue.module').then(m => m.QueueModule)},
  // {path: 'user', loadChildren: () => import('./user-detail/user-detail.module').then(m => m.UserDetailModule)},
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
  providers: [{provide: NZ_I18N, useValue: es_ES}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
