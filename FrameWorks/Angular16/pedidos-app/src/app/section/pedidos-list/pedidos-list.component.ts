import { Component } from '@angular/core';
import { Pedidos } from 'src/app/models/pedido.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss']
})
export class PedidosListComponent {
 pedidos: Pedido[];

 constructor(private dadosSevice:DadosService){
  this.pedidos= this.dadosSevice.getPedidos();
 }

 total(pedido:Pedido): number{
  return pedido.calcularTotal();
 }
}
