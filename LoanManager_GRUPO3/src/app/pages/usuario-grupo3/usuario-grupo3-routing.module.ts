import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioGRUPO3Page } from './usuario-grupo3.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioGRUPO3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioGRUPO3PageRoutingModule {}
