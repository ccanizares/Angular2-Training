import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogProductComponent } from './catalog-product/catalog-product.component';
import { CatalogComponent } from './catalog.component';
import { CatalogService } from './catalog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatalogComponent, CatalogProductComponent], 
  providers: [ CatalogService ]
})
export class CatalogModule { }
