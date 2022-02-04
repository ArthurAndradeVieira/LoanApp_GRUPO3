import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmprestimoGRUPO3Page } from './emprestimo-grupo3.page';

const routes: Routes = [
  {
    path: '',
    component: EmprestimoGRUPO3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmprestimoGRUPO3PageRoutingModule {}
