import { Cliente } from "./cliente.model";
import { Produto } from "./produto.model";

export class Pedidos{
    constructor(
        public id: number,
        public cliente:Cliente,
        public produtos:Produto[],
        public desconto:number
    ){}
    //metodo 
    calcularTotal():number{
        const total=this.produtos.reduce(
            (acc,p)=> acc +p.preco,0

        );

        return total -(total*(this.desconto/100));
    }
}