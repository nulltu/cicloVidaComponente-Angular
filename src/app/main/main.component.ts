import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() texto:any;

  constructor() {
    console.log("estoy en el constructor");
    console.log("inicio las propiedades");

   }

  ngOnInit(): void {
    console.log("estoy en el ngOnInit")
  }

  ngAfterViewInit(): void {
    console.log("soy el afterViewInit") 
  }

  ngOnChanges(){
    console.log("estoy en el ngOnChanges")
    console.log(`Texto: ${this.texto}`);
    
  }

}
