import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { BasketService } from './basket.service';

@NgModule({
  imports: [
    CommonModule,
    BasketRoutingModule
  ],
  declarations: [BasketComponent], 
  providers: [ BasketService ]
})
export class BasketModule { 

}
