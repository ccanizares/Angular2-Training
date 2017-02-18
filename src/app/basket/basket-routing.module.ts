import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket.component';

const routes: Routes = [
  {
    path: '',
    component: BasketComponent
  },
  // {
  //   path: 'status',
  //   component: BasketStatus 
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BasketRoutingModule { }
