import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Produto } from '../models/produto.model';
import { Pedidos } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private clientes: Cliente[] = [];
  private produtos: Produto[] = [];
  private pedidos: Pedidos[] = [];

  constructor() { }

  //métodos: add -> get
  getClientes(): Cliente[] {
    return this.clientes;
  }

  getProdutos(): Produto[]{
    return this.produtos;
  }

  getPedidos(): Pedidos[] {
    return this.pedidos;
  }

  addCliente(cliente:Cliente): void{
    this.clientes.push(cliente);
  }

  addProduto(produto:Produto):void{
    this.produtos.push(produto);
  }

  addPedido(pedido:Pedidos):void{
    this.pedidos.push(pedido);
  }
}
