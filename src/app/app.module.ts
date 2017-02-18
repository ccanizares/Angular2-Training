import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Modules:
import { CatalogModule } from './catalog/catalog.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, 
    CatalogModule, 
    SharedModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
