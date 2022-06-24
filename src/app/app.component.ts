import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  number1:number = 0;
  number2:number = 0;
  resultado:number = 0;
  text:string = '';

  sumar(){
    this.resultado = this.number1 + this.number2;
    this.text = 'el resultado de la suma es: ';
  }

  restar(){
    this.resultado = this.number1 - this.number2;
    this.text = 'el resultado de la resta es: ';
  }

  dividir(){
    this.resultado = this.number1 / this.number2;
    this.text = 'el resultado de la division es: ';
  }

  multiplicar(){
    this.resultado = this.number1 * this.number2;
    this.text = 'el resultado de la multiplicacion es: ';
  }
}
