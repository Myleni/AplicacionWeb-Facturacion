import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacturaListComponent } from './component/factura-list/factura-list.component';
import { FacturaSaveComponent } from './component/factura-save/factura-save.component';
import { FacturaEditComponent } from './component/factura-edit/factura-edit.component';
import { FacturaDeleteComponent } from './component/factura-delete/factura-delete.component';

const routes: Routes = [
  {path:'factura-list', component:FacturaListComponent},
  {path:'factura-save', component:FacturaSaveComponent},
  {path:'factura-edit/:id', component:FacturaEditComponent},
  {path:'factura-delete/:id', component:FacturaDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
