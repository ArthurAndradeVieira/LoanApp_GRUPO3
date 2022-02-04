import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioGRUPO3Page } from './inicio-grupo3.page';

const routes: Routes = [
  {
    path: '',
    component: InicioGRUPO3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioGRUPO3PageRoutingModule {}
