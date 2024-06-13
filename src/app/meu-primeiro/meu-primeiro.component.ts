import { Component } from '@angular/core';

@Component({
  selector: 'meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent {

  imagem:any = "../../assets/img/imgHome.png";

  nome: string = "";
  btnStatus:boolean = false;

  ativar(name:string){
    this.nome = name;
    this.btnStatus = !this.btnStatus
  }

}
