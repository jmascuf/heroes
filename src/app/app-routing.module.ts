import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { ListComponent } from './hero/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: ListComponent },
  { path: 'detail', loadChildren: () => import('./hero/detail/detail.module').then(m => m.DetailModule) },
  { path: 'new', loadChildren: () => import('./hero/new/new.module').then(m => m.NewModule) },
  { path: 'edit', loadChildren: () => import('./hero/edit/edit.module').then(m => m.EditModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
