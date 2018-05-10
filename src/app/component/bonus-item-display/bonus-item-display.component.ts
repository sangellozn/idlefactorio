import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../bean/game';
import { ResourceItem } from '../../bean/resource-item';

@Component({
  selector: 'app-bonus-item-display',
  templateUrl: './bonus-item-display.component.html',
  styleUrls: ['./bonus-item-display.component.css']
})
export class BonusItemDisplayComponent implements OnInit {

  @Input() public resource:ResourceItem;
  public game:Game;

  constructor() {
    this.game = Game.getInstance();
  }

  ngOnInit() {
  }

  

}
