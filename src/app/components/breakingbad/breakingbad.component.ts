import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BreakingbadService } from 'src/app/services/breakingbad.service';
@Component({
  selector: 'app-breakingbad',
  templateUrl: './breakingbad.component.html',
  styleUrls: ['./breakingbad.component.css']
})
export class BreakingbadComponent implements OnInit {
  quote:any;
  characters:any;
  constructor(private breakingBad:BreakingbadService) { }

  ngOnInit(): void {
    this.mostrarQuote();
    this.mostrarPersonajes();
  }
  mostrarQuote():void{
    this.breakingBad.getQuote().subscribe(data=>this.quote=data);
    
  }
  mostrarPersonajes():void{
    this.breakingBad.getCharacters().subscribe(data=>this.characters=data);
  }
}
