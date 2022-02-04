import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmprestimoGRUPO3PageRoutingModule } from './emprestimo-grupo3-routing.module';

import { EmprestimoGRUPO3Page } from './emprestimo-grupo3.page';
import { HeaderGRUPO3Component } from 'src/app/components/header-grupo3/header-grupo3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmprestimoGRUPO3PageRoutingModule
  ],
  declarations: [EmprestimoGRUPO3Page, HeaderGRUPO3Component]
})
export class EmprestimoGRUPO3PageModule {}
