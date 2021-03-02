import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciclo-vida-componente';
  mainTexto:string;

  constructor(){
    this.mainTexto = "******Soy el texto como variable desde el padre*****";
  }

  ngOnInit(): void {
    let contador = 0;
    setInterval(()=>{
      this.mainTexto = `Texto ${contador++}`;
    },1000)
  }
}
