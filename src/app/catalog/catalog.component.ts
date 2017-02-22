import { Component, OnInit } from '@angular/core';
import { ICatalog } from './models/catalog.model';
import { CatalogService } from './catalog.service';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalog: ICatalog;
  constructor(private service: CatalogService) {
    //this.getCatalog();
  }

  ngOnInit() {
  }

  onAddToBasket() {
    console.log('Hola que ase');
  }
}
