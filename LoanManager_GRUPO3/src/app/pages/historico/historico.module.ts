import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoPageRoutingModule } from './historico-routing.module';

import { HistoricoPage } from './historico.page';
import { HeaderGRUPO3Component } from 'src/app/components/header-grupo3/header-grupo3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoPageRoutingModule
  ],
  declarations: [HistoricoPage, HeaderGRUPO3Component]
})
export class HistoricoPageModule {}
