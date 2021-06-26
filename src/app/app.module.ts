import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailComponent } from './hero/detail/detail.component';
import { NewComponent } from './hero/new/new.component';
import { ListComponent } from './hero/list/list.component';
import { EditComponent } from './hero/edit/edit.component';

import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    NewComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
