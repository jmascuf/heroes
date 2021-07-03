import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],

  exports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule

  ]
})
export class UiModule { }