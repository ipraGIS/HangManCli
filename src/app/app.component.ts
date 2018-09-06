import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mostrar: number;

  set _mostrar(m: number) {
    this.mostrar = m;
  }
  constructor() {
    this.mostrar = 0;
  }

  onTab(tab) {
    this.mostrar = tab;
    console.log('muestra tab ' + tab);
  }
}
