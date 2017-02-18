import { Injectable } from '@angular/core';
import { DataService } from '../shared/services/data.service';

import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class BasketService {
    constructor(private service: DataService) {
        // this.configurationService.settingsLoaded$.subscribe(x => {
        //     this.catalogUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/items';
        //     this.brandUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/catalogbrands';
        //     this.typesUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/catalogtypes';
        // });
        //this.catalogUrl = 'http://localhost:5101/api/v1/Catalog/Items';
        console.log(this.service.state);
    }
}