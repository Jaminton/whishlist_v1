import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  destinos: String[];
  constructor() { 
    this.destinos = ["Barranquilla","Lima","Bogota","cali","SanAndres"];


  }

  ngOnInit(): void {
  }

}
