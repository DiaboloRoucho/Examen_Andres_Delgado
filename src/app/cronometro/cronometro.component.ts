import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit{
  contador:number = 0;


  ngOnInit(): void {
    this.contador = 0;
}
  async iniciarContador(){
    while(true){
    this.contador++;
      await new Promise(f => setTimeout(f, 1000));
    }
  }
}

