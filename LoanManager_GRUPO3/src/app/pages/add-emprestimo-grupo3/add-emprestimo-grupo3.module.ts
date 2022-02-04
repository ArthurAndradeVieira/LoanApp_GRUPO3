import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEmprestimoGRUPO3PageRoutingModule } from './add-emprestimo-grupo3-routing.module';

import { AddEmprestimoGRUPO3Page } from './add-emprestimo-grupo3.page';
import { HeaderGRUPO3Component } from 'src/app/components/header-grupo3/header-grupo3.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEmprestimoGRUPO3PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddEmprestimoGRUPO3Page, HeaderGRUPO3Component]
})
export class AddEmprestimoGRUPO3PageModule {}
