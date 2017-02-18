import { Injectable } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { ICatalog } from './models/catalog.model';

import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

@Injectable()
export class CatalogService {
    private catalogUrl: string = '';
    private brandUrl: string = '';
    private typesUrl: string = '';

    constructor(private service: DataService) {
        // this.configurationService.settingsLoaded$.subscribe(x => {
        //     this.catalogUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/items';
        //     this.brandUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/catalogbrands';
        //     this.typesUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/catalogtypes';
        // });
        this.catalogUrl = 'http://localhost:5101/api/v1/Catalog/Items';
        console.log(this.service.state);
    }

    getCatalog(): Observable<ICatalog> {
        let url = this.catalogUrl;
        // if (brand || type) {
        //     url = this.catalogUrl + '/type/' + ((type) ? type.toString() : 'null') + '/brand/' + ((brand) ? brand.toString() : 'null');
        // }

        //url = url + '?pageIndex=' + pageIndex + '&pageSize=' + pageSize;

        return this.service.get(url).map((response: Response) => {
            return response.json();
        });
    }

    // getBrands(): Observable<ICatalogBrand[]> {
    //     return this.service.get(this.brandUrl).map((response: Response) => {
    //         return response.json();
    //     });
    // }

    // getTypes(): Observable<ICatalogType[]> {
    //     return this.service.get(this.typesUrl).map((response: Response) => {
    //         return response.json();
    //     });
    // };
}
