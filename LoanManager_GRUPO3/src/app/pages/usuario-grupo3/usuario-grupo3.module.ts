import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioGRUPO3PageRoutingModule } from './usuario-grupo3-routing.module';

import { UsuarioGRUPO3Page } from './usuario-grupo3.page';
import { HeaderGRUPO3Component } from 'src/app/components/header-grupo3/header-grupo3.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioGRUPO3PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UsuarioGRUPO3Page, HeaderGRUPO3Component]
})
export class UsuarioGRUPO3PageModule {}
