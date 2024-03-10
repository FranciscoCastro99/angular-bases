import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";



@NgModule({
  declarations:[
    HeroComponent,
    ListComponent,
  ],
  imports:[
    CommonModule, //cuando se trabaja con condicionales es necesario importar el commonModule y que quede parte del componente
  ],
  exports:[
    HeroComponent,
    ListComponent,
  ]
})

export class HeroModule { };


