import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemGRUPO3PageRoutingModule } from './add-item-grupo3-routing.module';

import { AddItemGRUPO3Page } from './add-item-grupo3.page';
import { HeaderGRUPO3Component } from 'src/app/components/header-grupo3/header-grupo3.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemGRUPO3PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddItemGRUPO3Page, HeaderGRUPO3Component]
})
export class AddItemGRUPO3PageModule {}
