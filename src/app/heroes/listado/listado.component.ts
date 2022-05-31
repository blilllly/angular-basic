import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Superman' ,'Spiderman', 'Ironman', 'Hulk', 'Batman'];
  heroeBorrado: string = '';

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
