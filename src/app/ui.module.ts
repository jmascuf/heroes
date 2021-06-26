import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],

  exports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule

  ]
})
export class UiModule { }