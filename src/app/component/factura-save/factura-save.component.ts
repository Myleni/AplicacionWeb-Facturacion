import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from '../../domain/factura';
import { FacturaService } from '../../service/factura.service';

@Component({
  selector: 'app-factura-save',
  templateUrl: './factura-save.component.html',
  styleUrls: ['./factura-save.component.less']
})
export class FacturaSaveComponent implements OnInit {

  public factura:Factura;
  public error:boolean=false;
  public msg:string;
  public type:string;

  constructor(public facturaService:FacturaService,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.factura=  new Factura(0,new Date("2019-01-16"),0,"","")
  }

  save(){
    this.facturaService.save(this.factura).subscribe(data =>{
      this.router.navigate(['/factura-list'])
    },error=>{console.log(error);
      this.error=true;
      this.msg="Ocurrio un error";
      this.type="danger";
    })
  }

}
