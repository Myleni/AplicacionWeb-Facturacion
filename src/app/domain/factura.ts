export class Factura {
    constructor(
        public IdFactura:number,
        public Fecha:Date,
        public Total:number,
        public RazonSocial:string,
        public Ruc:string
        ){}
}
