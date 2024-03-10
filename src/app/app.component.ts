import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  public title: string = 'Hola Mundo';


  ngOnInit(): void {
    initFlowbite();
  }


















  // public counter:number = 10;

  // incrementar(value:number):void{
  //   this.counter +=value; //esta es la abreviación de this.counter = this.counter + 1
  // }
  // reset():void{
  //   this.counter = 10; // ---> esta es la forma como esta en el video, y es una funcion con parametro vacio.
  // }

  // Forma 1
  // reset(restart:number):void{
  //   this.counter = restart = 10;
  // }

  // Forma 2
  // reset(restart:number):void{
  //   this.counter = restart; ---> se debe colocar el valor 10 en el html
  // }
  // decrementar():void{
  //   this.counter -=1;
  // }
}
