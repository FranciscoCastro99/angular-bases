import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']

  public heroeEliminado?:string;

  eliminarHeroe():void{
    // const heroEliminado = this.heroNames.pop() //esta variable solo funcionaría dentro de esta función y no por fuera, razón por la cual es necesario crear una variable por fuera de la funcion
    this.heroeEliminado = this.heroNames.pop() //pro esta razón la variable a llamar se hace con this y no con const. El metodo Pop es para eliminar el ultimo elemento del array pero existen muchos más metodos asi que toca leer
  }


}
