import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  
  title: string;
  ngOnInit(): void{
    this.title = "Liste de Pokémons";
  }
}