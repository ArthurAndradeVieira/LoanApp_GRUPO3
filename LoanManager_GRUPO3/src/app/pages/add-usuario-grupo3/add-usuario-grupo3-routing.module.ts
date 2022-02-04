import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUsuarioGRUPO3Page } from './add-usuario-grupo3.page';

const routes: Routes = [
  {
    path: '',
    component: AddUsuarioGRUPO3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUsuarioGRUPO3PageRoutingModule {}
