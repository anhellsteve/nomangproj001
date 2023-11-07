import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nomangproj001';
  nombre = '';
  apellido = '';
  edad = 20;
  email = 'DoeJohn@gmail.com';
  salario = [1700, 1600, 1900];
  activo = true;
  sitio = 'https://www.google.com';
  contador = 1;

  esActivo(){
    if(this.activo){
      return 'Trabajador Activo';
    }else{
      return 'Trabajador Inactivo';
    }
  }

  ultimos3Salario(){
    let suma = 0;
    for(let i = 0; i < this.salario.length; i++) {
      suma+=this.salario[i];
    }
    return suma;
  }
  
  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }
}
