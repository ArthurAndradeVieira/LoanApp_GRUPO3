import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemGRUPO3Page } from './item-grupo3.page';

const routes: Routes = [
  {
    path: '',
    component: ItemGRUPO3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemGRUPO3PageRoutingModule {}
