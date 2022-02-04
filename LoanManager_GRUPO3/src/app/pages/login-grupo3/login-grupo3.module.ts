import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginGRUPO3PageRoutingModule } from './login-grupo3-routing.module';

import { LoginGRUPO3Page } from './login-grupo3.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginGRUPO3PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginGRUPO3Page]
})
export class LoginGRUPO3PageModule {}
