import { Component, OnInit } from '@angular/core';
import { Game } from '../../bean/game';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private game:Game;
  public displayGameSavedAlert:boolean;
  public hasLocalStorage:boolean;

  constructor() {
    this.displayGameSavedAlert = false; 
    this.hasLocalStorage = localStorage ? true : false;
  }

  ngOnInit() {
    this.game = Game.getInstance();
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
