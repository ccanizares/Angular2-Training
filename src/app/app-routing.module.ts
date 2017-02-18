import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent }  from './catalog/catalog.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent 
  }, 
  //Lazy loading
  { path: 'basket', loadChildren: 'app/basket/basket.module#BasketModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
