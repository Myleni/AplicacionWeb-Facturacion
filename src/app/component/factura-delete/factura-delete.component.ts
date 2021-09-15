import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Factura } from 'src/app/domain/factura';
import { FacturaService } from '../../service/factura.service';


@Component({
  selector: 'app-factura-delete',
  templateUrl: './factura-delete.component.html',
  styleUrls: ['./factura-delete.component.less']
})
export class FacturaDeleteComponent implements OnInit {

  public id :number;
  public factura:Factura;
  public error:boolean=false;
  public msg:string;
  public type:string;

  constructor(public facturaService:FacturaService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  public getById(){
    this.activatedRoute.params.subscribe(parameters=>this.id=parameters['id']);
    //this.id=param.id; 
    this.facturaService.getById(this.id).subscribe(data=>{
      this.factura=data;
    },error=>{
      this.error=true;
      this.msg="Ocurrio un error";
      this.type="danger";
    })
  }

  public delete(){
    this.facturaService.delete(this.factura.IdFactura).subscribe(data =>{
      this.router.navigate(['/factura-list'])
    },error=>{console.log(error);
      this.error=true;
      this.msg="Ocurrio un error";
      this.type="danger";
    })
  }

}
