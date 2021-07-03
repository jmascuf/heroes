import { NgModule } from '@angular/core';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { UiModule } from 'src/app/ui.module';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    DetailRoutingModule,
    UiModule,
  ]
})
export class DetailModule { }
