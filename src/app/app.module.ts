import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { UpperCaseTextDirective } from './shared/directives/upperCaseText.directive';

import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui.module';

import { AppComponent } from './app.component';
import { ListComponent } from './hero/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    UpperCaseTextDirective,
    AppComponent,
    ListComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UiModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
