import { Component, OnInit } from '@angular/core';
import { Game } from '../../bean/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private game:Game;
  private displayGameSavedAlert:boolean;
  private hasLocalStorage:boolean;

  constructor() { 
    this.game = Game.getInstance(); 
    this.displayGameSavedAlert = false; 
    this.hasLocalStorage = localStorage ? true : false;
  }

  ngOnInit() {
    this.game.init();
  }

  saveGame() {
    this.game.save();
    this.displayGameSavedAlert = true;
    window.setTimeout(() => {this.displayGameSavedAlert = false}, 3000);
  }

  resetGame() {
    if (confirm('Warning: Your progression will be erased ! Are you sure ?')) {
      this.game.resetGame();
    }
  }

}
