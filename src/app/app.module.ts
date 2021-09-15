import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FacturaService } from './service/factura.service';
import { FacturaListComponent } from './component/factura-list/factura-list.component';
import { FacturaSaveComponent } from './component/factura-save/factura-save.component';
import { FacturaEditComponent } from './component/factura-edit/factura-edit.component';
import { FacturaDeleteComponent } from './component/factura-delete/factura-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    FacturaListComponent,
    FacturaSaveComponent,
    FacturaEditComponent,
    FacturaDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FacturaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
