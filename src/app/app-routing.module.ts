import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './hero/detail/detail.component';
import { EditComponent } from './hero/edit/edit.component';
// Components
import { ListComponent } from './hero/list/list.component';
import { NewComponent } from './hero/new/new.component';

const routes: Routes = [
  { path: '', redirectTo:'/heroes', pathMatch: 'full'},
  { path: 'heroes', component: ListComponent },
  { path: 'new', component: NewComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'edit/:id', component: EditComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
