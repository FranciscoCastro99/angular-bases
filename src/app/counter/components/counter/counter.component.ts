import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<!-- Esta parte gracias a las comillas invertidas y la palabra template funciona como un Html--->
    <h2>Este es el Counter Component</h2>
    <h3>Counter: {{ counter }}</h3>

    <button (click)="incrementar(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementar(-1)">-1</button>
  `,
})

export class CounterComponent {
  public counter: number = 10;

  incrementar(value: number): void {
    this.counter += value; //esta es la abreviación de this.counter = this.counter + 1
  }
  reset(): void {
    this.counter = 10; // ---> esta es la forma como esta en el video, y es una funcion con parametro vacio.
  }
}
