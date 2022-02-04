import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGRUPO3Page } from './login-grupo3.page';

const routes: Routes = [
  {
    path: '',
    component: LoginGRUPO3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginGRUPO3PageRoutingModule {}
