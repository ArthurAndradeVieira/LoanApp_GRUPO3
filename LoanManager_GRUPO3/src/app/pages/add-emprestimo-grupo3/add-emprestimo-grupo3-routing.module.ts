import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmprestimoGRUPO3Page } from './add-emprestimo-grupo3.page';

const routes: Routes = [
  {
    path: '',
    component: AddEmprestimoGRUPO3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEmprestimoGRUPO3PageRoutingModule {}
