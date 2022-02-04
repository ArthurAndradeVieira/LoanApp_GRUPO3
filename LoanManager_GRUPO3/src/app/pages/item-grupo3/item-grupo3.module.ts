import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemGRUPO3PageRoutingModule } from './item-grupo3-routing.module';

import { ItemGRUPO3Page } from './item-grupo3.page';
import { HeaderGRUPO3Component } from 'src/app/components/header-grupo3/header-grupo3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemGRUPO3PageRoutingModule
  ],
  declarations: [ItemGRUPO3Page, HeaderGRUPO3Component]
})
export class ItemGRUPO3PageModule {}
