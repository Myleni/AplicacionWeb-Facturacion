import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../domain/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  public url: string;

  constructor(public httpClient:HttpClient) { 
    //this.url='./assets/MOCK_DATA.json';
    this.url='http://localhost:63638/api/facturas/';
  }

  public getAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  public getById(id:number):Observable<any>{
    return this.httpClient.get(this.url+id);
  }

  public save(factura:Factura):Observable<any>{
    return this.httpClient.post(this.url,factura);
  }

  public edit(factura:Factura):Observable<any>{
    return this.httpClient.put(this.url+factura.IdFactura,factura);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.url+id)
  }
}
