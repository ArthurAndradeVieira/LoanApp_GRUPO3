import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioGRUPO3PageRoutingModule } from './inicio-grupo3-routing.module';

import { InicioGRUPO3Page } from './inicio-grupo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioGRUPO3PageRoutingModule
  ],
  declarations: [InicioGRUPO3Page]
})
export class InicioGRUPO3PageModule {}
