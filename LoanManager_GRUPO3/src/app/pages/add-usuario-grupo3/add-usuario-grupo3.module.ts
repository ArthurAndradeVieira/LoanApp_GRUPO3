import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUsuarioGRUPO3PageRoutingModule } from './add-usuario-grupo3-routing.module';

import { AddUsuarioGRUPO3Page } from './add-usuario-grupo3.page';
import { HeaderGRUPO3Component } from 'src/app/components/header-grupo3/header-grupo3.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUsuarioGRUPO3PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddUsuarioGRUPO3Page, HeaderGRUPO3Component]
})
export class AddUsuarioGRUPO3PageModule {}
