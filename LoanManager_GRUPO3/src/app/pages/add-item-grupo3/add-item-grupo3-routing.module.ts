import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemGRUPO3Page } from './add-item-grupo3.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemGRUPO3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemGRUPO3PageRoutingModule {}
