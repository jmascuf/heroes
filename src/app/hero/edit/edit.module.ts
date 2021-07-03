import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from 'src/app/ui.module';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    UiModule,
    ReactiveFormsModule,
  ]
})
export class EditModule { }
