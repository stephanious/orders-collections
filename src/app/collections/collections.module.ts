import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [CollectionsComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class CollectionsModule { }
