import { Component, OnDestroy, OnInit } from '@angular/core';
import { Factura } from '../../domain/factura';
import { FacturaService } from '../../service/factura.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.less']
})
export class FacturaListComponent implements OnInit,OnDestroy {

  public facturas : Factura[];
  public subFacturas: Subscription;

  constructor(public facturaService: FacturaService) {
    this.facturas=[];
   }
  ngOnDestroy(): void {
    this.subFacturas.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.subFacturas= this.facturaService.getAll().subscribe(data=>{
      this.facturas=data;
    });
  }
}
