import { Component, OnInit, Input } from '@angular/core';
import { ResearchItem } from '../../bean/research-item';
import { Game } from '../../bean/game';

@Component({
  selector: 'app-bonus-item-display',
  templateUrl: './bonus-item-display.component.html',
  styleUrls: ['./bonus-item-display.component.css']
})
export class BonusItemDisplayComponent implements OnInit {

  @Input() public resource:ResearchItem;
  public game:Game;

  constructor() {
    this.game = Game.getInstance();
  }

  ngOnInit() {
  }

  

}
