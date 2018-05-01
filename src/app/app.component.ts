import { Component, OnInit } from '@angular/core';
import { Game } from './bean/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private game:Game;

  constructor() {
    this.game = Game.getInstance();
  }

  ngOnInit() {
    this.game.init();
  }
  
}
