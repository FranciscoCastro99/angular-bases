import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription():string { //si se pone private no deja usarse en el html porque se sale del scope, pero si es publico funciona en html y se acostumbra a no poner que sea publico
    return `${ this.name } - ${ this.age } `;
  }

  changeHero():void{

    this.name='Spiderman';
  }

  changeAge():void{
    this.age=25;
  }

  resetForm():void{
    this.age=45;
    this.name='ironman';
  }


}
