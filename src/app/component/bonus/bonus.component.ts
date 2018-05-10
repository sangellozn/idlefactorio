import { Component, OnInit } from '@angular/core';
import { ResourceItem } from '../../bean/resource-item';
import { Game } from '../../bean/game';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {

  public bonus:ResourceItem[];

  constructor() { }

  ngOnInit() {
    this.bonus = Game.getInstance().getBonusItems();
  }

}
