import { Component, OnInit } from '@angular/core';
import { Game } from '../../bean/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private game:Game;

  constructor() { 
    this.game = Game.getInstance();
  }

  ngOnInit() { }

}
