import {NgModule} from '@angular/core';
import {VisitsPipe} from './visits.pipe';

@NgModule({
  declarations: [VisitsPipe],
  exports: [VisitsPipe]
})
export class VisitsPipeModule {
}
