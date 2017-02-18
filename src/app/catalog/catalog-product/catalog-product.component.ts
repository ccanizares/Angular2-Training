import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICatalogItem } from '../models/catalogItem.model';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.scss']
})
export class CatalogProductComponent implements OnInit {
  @Input() item: ICatalogItem;
  @Output() onAddToBasket: EventEmitter<ICatalogItem> = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

  addToCart(event: any) {
      console.log('hola que ase');
      this.onAddToBasket.emit(this.item); //Raise changed event
  }
}
