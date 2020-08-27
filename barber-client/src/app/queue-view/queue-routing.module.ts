import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QueuePageComponent} from './queue-page.component';

const routes: Routes = [
  {path: '', component: QueuePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueueRoutingModule {
}
